import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from '@loadable/component';
// import Home from './pages/Home';
// import Users from './pages/Users';
// import Settings from './pages/Settings';
import NoPage from './pages/NoPage';

const Home = loadable(() => import('./pages/Home'), {
  fallback: <div>Loading...</div>,
});
const Users = loadable(() => import('./pages/Users'), {
  fallback: <div>Loading...</div>,
});
const Settings = loadable(() => import('./pages/Settings'), {
  fallback: <div>Loading...</div>,
});

// const LazyLoad = (pageName) => {
//   return lazy(() => import(`./pages/${pageName}`))
// };

const User = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users" onMouseOver={() => Users.preload()} onFocus={() => {}}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/settings" onMouseOver={() => Settings.preload()} onFocus={() => {}}>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route>
        <NoPage />
      </Route>
    </Switch>
  </Router>
);

export default User;
