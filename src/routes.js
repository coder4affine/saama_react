import React from 'react';
import loadable from '@loadable/component';
import AddProduct from './pages/AddProduct';

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

const Products = loadable(() => import('./pages/Products'), {
  fallback: <div>Loading...</div>,
});

// const AddProduct = loadable(() => import('./pages/AddProduct'), {
//   fallback: <div>Loading...</div>,
// });

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
  {
    path: '/products',
    component: Products,
    name: 'Products',
  },
  {
    path: '/addProduct',
    component: AddProduct,
  },
  {
    path: '/updateProduct/:id',
    component: AddProduct,
  },
];

export default route;
