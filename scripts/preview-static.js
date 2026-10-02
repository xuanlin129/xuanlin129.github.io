import express from 'express';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../dist/client/', import.meta.url));
const app = express();
const port = Number(process.env.PORT || 4173);

// Match GitHub Pages extensionless HTML URLs without invoking the SSR renderer.
app.use(express.static(output, { extensions: ['html'], redirect: false }));
app.use((request, response) => {
  response.status(404).sendFile('404.html', { root: output });
});

app.listen(port, process.env.HOST || '127.0.0.1', () => {
  console.log(`Static preview running at http://localhost:${port}`);
});
