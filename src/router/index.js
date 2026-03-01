import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Helmet from '../components/Helmet';

const Layout = React.lazy(() => import('../layouts/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Portfolio = React.lazy(() => import('../pages/Portfolio'));
const Contact = React.lazy(() => import('../pages/Contact'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, title: 'home' },
      { path: 'about', element: <About />, title: 'about' },
      { path: 'portfolio', element: <Portfolio />, title: 'portfolio' },
      { path: 'contact', element: <Contact />, title: 'contact' },
    ],
  },
  { path: '*', element: <NotFound />, title: 'notFound' },
];

function applyHelmetToRoutes(routes) {
  return routes.map((route) => {
    const { children, title, element, ...rest } = route;
    const newRoute = { ...rest };

    if (element) {
      newRoute.element = title ? <Helmet title={title}>{element}</Helmet> : element;
    }

    if (children) {
      newRoute.children = applyHelmetToRoutes(children);
    }

    return newRoute;
  });
}

const router = createHashRouter(applyHelmetToRoutes(routes));

export default router;
