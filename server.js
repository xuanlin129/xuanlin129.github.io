import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createHttpServer } from 'node:http';
import { renderDocument } from './scripts/html.js';

const root = fileURLToPath(new URL('.', import.meta.url));
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production');
const port = Number(process.env.PORT || 3000);
const app = express();
const server = createHttpServer(app);

async function createRenderer() {
  if (isProduction) {
    const template = await readFile(new URL('./dist/server/index.html', import.meta.url), 'utf8')
      .catch((error) => {
        if (error.code !== 'ENOENT') throw error;
        return readFile(new URL('./dist/client/index.html', import.meta.url), 'utf8');
      });
    const { render } = await import('./dist/server/entry-server.js');
    app.use(express.static(`${root}dist/client`, { index: false, redirect: false }));
    return { load: async () => ({ template, render }) };
  }

  const { createServer } = await import('vite');
  const vite = await createServer({
    root,
    server: { middlewareMode: true, hmr: { server } },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  return {
    vite,
    async load(url) {
      const source = await readFile(new URL('./index.html', import.meta.url), 'utf8');
      const template = await vite.transformIndexHtml(url, source);
      const { render } = await vite.ssrLoadModule('/src/entry-server.js');
      return { template, render };
    },
  };
}

const renderer = await createRenderer();
app.use(async (request, response, next) => {
  if (!['GET', 'HEAD'].includes(request.method)) return next();
  if (!request.accepts('html')) return next();
  if (/\.[\w]+$/.test(request.path)) return next();

  try {
    const { template, render } = await renderer.load(request.originalUrl);
    const result = await render(request.originalUrl);
    response.status(result.status).type('html').send(renderDocument(template, result));
  } catch (error) {
    renderer.vite?.ssrFixStacktrace(error);
    next(error);
  }
});

server.listen(port, process.env.HOST || '0.0.0.0', () => {
  console.log(`SSR server running at http://localhost:${port}`);
});

async function shutdown() {
  server.close();
  await renderer.vite?.close();
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
