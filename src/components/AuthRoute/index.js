/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const index = ({ component, authenticated, ...props }) => (
  <Route
    {...props}
    render={({ location }) => {
      if (authenticated) {
        return component;
      }
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      );
    }}
  />
);

export default index;
