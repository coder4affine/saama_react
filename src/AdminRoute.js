import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from '@loadable/component';
// import Home from './pages/Home';
// import Users from './pages/Users';
// import Settings from './pages/Settings';

const Cart = loadable(() => import('./pages/Cart'), {
  fallback: <div>Loading...</div>,
});
const Products = loadable(() => import('./pages/Products'), {
  fallback: <div>Loading...</div>,
});

// const LazyLoad = (pageName) => {
//   return lazy(() => import(`./pages/${pageName}`))
// };

const Admin = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/admin">Products</Link>
        </li>
        <li>
          <Link to="/admin/cart">Cart</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/admin" exact>
        <Cart />
      </Route>
      <Route path="/admin/cart">
        <Products />
      </Route>
    </Switch>
  </Router>
);

export default Admin;
