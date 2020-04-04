import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const index = ({
  field,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <TextField
    {...props}
    id="outlined-basic"
    variant="outlined"
    error={touched[field.name] && errors[field.name]}
    helperText={touched[field.name] && errors[field.name]}
    {...field}
  />
);

index.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
};

export default index;
