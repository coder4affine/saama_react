import React from 'react';
import loadable from '@loadable/component';

// const dynamicRoute = (pathName) => {
//   console.log('route');
// };

const Home = loadable(() => import('./pages/Home'), {
  fallback: <div>Loading...</div>,
});

const Users = loadable(() => import('./pages/Users'), {
  fallback: <div>Loading...</div>,
});

const Settings = loadable(() => import('./pages/Settings'), {
  fallback: <div>Loading...</div>,
});

const route = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home',
  },
  {
    path: '/users',
    component: Users,
    auth: false,
    name: 'Users',
  },
  {
    path: '/settings',
    component: Settings,
    name: 'Settings',
  },
];

export default route;
