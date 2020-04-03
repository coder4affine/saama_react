import React from 'react';
// import moment from 'moment';

import PropTypes from 'prop-types';

const Index = ({ history }) => {
  const redirect = () => {
    // import('moment')
    //   .then((moment) => {})
    //   .catch(() => {
    //     console.warn('momemnt not loaded');
    //   });
    history.push('/users');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={redirect}>
        Go To User
      </button>
    </div>
  );
};

Index.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Index;
