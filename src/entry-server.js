import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { createApp } from './main';
import { createI18n } from './plugins/i18n';
import { createRoutes, prerenderPaths } from './router';

export { prerenderPaths };

export async function render(url) {
  const routes = await createRoutes(url);
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(new URL(url, 'http://localhost')));
  if (context instanceof Response) throw new Error('Unexpected SSR redirect');
  const router = createStaticRouter(handler.dataRoutes, context);
  const i18n = await createI18n();
  const helmetContext = {};
  const styleSheet = new ServerStyleSheet();
  const styleCache = createCache();

  try {
    const app = createApp({
      i18n,
      helmetContext,
      children: <StaticRouterProvider router={router} context={context} hydrate={false} />,
    });
    const html = renderToString(styleSheet.collectStyles(
      <StyleProvider cache={styleCache}>{app}</StyleProvider>,
    ));
    const isNotFound = context.matches.at(-1)?.route.path === '*';
    return {
      html,
      head: helmetContext.helmet.title.toString(),
      styles: extractStyle(styleCache) + styleSheet.getStyleTags(),
      status: isNotFound ? 404 : context.statusCode,
    };
  } finally {
    styleSheet.seal();
  }
}
