import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Users from './pages/Users';
// import Settings from './pages/Settings';
import NoPage from './pages/NoPage';
import AuthRoute from './components/AuthRoute';
import routes from './routes';

// const LazyLoad = (pageName) => {
//   return lazy(() => import(`./pages/${pageName}`))
// };

const App = () => (
  <Router>
    <nav>
      <ul>
        {routes.map((x) => {
          if (!x.auth && x.name) {
            return (
              <li key={x.path}>
                <Link to={x.path}>{x.name}</Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
    <Switch>
      {routes.map((x) => {
        if (x.auth) {
          return <AuthRoute key={x.path} authenticated={false} {...x} />;
        }
        return <Route key={x.path} {...x} />;
      })}

      <Route>
        <NoPage />
      </Route>
    </Switch>
  </Router>
);

export default App;

// // function component
// // class component
// import React from 'react';
// import PropTypes from 'prop-types';

// class App extends React.Component {
//   state = {
//     text: '',
//   };

//   buttonClick = () => {
//     const { text } = this.state;
//     alert(text);
//   };

//   render() {
//     console.log('render');
//     const { title, caption } = this.props;
//     const { text } = this.state;
//     return (
//       <>
//         <h1>{title}</h1>
//         <h2>{caption}</h2>
//         <input
//           type="text"
//           value={text}
//           onChange={(event) => {
//             this.setState({ text: event.target.value });
//           }}
//         />
//         <h1>{text}</h1>
//         <button type="button" onClick={this.buttonClick}>
//           Submit
//         </button>
//       </>
//     );
//   }
// }

// App.propTypes = {
//   title: PropTypes.string,
//   caption: PropTypes.string,
// };

// App.defaultProps = {
//   title: 'Hello Word',
//   caption: 'How are you?',
// };

// export default App;

// // import React from 'react';
// // import PropTypes from 'prop-types';

// // const App = ({ title, caption }) => (
// //   <>
// //     <h1>{title}</h1>
// //     <h2>{caption}</h2>
// //     <input type="password" />
// //   </>
// // );

// // export default App;
