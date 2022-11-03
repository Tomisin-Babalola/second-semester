import React, { lazy } from 'react';
export const Home = lazy(() => import('../pages/Home'));
export const ErrorPage = lazy(() => import('../pages/ErrorPage'));
export const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/errorpage',
    element: <ErrorPage/>
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];

export default routes;