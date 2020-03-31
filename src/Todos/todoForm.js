import React, { memo } from 'react';
import PropTypes from 'prop-types';

const todoForm = ({ submit, inputRef }) => (
  // console.log('render todoForm');
  // throw new Error('Something went wrong!');
  <form onSubmit={submit}>
    <input type="text" ref={inputRef} />
    <button type="submit">Add Todo</button>
  </form>
);
todoForm.propTypes = {
  submit: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
};

export default memo(todoForm);
