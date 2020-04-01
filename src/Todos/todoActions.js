import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { statusText } from '../constants';
import styles from './styles';

const todoActions = ({ changeStatus }) => {
  console.log('render todoActions');
  return (
    <div style={styles.display}>
      <button
        data-testid="btn-all"
        style={{ ...styles.flex, ...styles.center }}
        type="button"
        onClick={() => changeStatus(statusText[0])}
      >
        All
      </button>
      <button
        testid="btn-pending"
        style={{ ...styles.flex, ...styles.center }}
        type="button"
        onClick={() => changeStatus(statusText[1])}
      >
        Pending
      </button>
      <button
        data-testid="btn-completed"
        style={{ ...styles.flex, ...styles.center }}
        type="button"
        onClick={() => changeStatus(statusText[2])}
      >
        Completed
      </button>
    </div>
  );
};

todoActions.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default memo(todoActions);
