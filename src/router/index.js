import { matchRoutes } from 'react-router-dom';
import Helmet from '../components/Helmet';
import Layout from '../layouts/Layout';

export const prerenderPaths = ['/', '/about', '/portfolio', '/contact'];

function createPageRoute(path, title, loadPage) {
  return {
    ...(path === '/' ? { index: true } : { path }),
    async lazy() {
      const { default: Page } = await loadPage();
      return { element: <Helmet title={title}><Page /></Helmet> };
    },
  };
}

export async function createRoutes(url) {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        createPageRoute('/', 'home', () => import('../pages/Home')),
        createPageRoute('about', 'about', () => import('../pages/About')),
        createPageRoute('portfolio', 'portfolio', () => import('../pages/Portfolio')),
        createPageRoute('contact', 'contact', () => import('../pages/Contact')),
      ],
    },
    createPageRoute('*', 'notFound', () => import('../pages/NotFound')),
  ];
  const pathname = new URL(url, 'http://localhost').pathname;
  const matches = matchRoutes(routes, pathname) ?? [];

  // Resolve the initial page before SSR and hydration; other pages stay lazy.
  await Promise.all(matches.map(async ({ route }) => {
    if (!route.lazy) return;
    Object.assign(route, await route.lazy());
    delete route.lazy;
  }));
  return routes;
}
