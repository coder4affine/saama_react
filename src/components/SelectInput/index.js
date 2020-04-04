/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const index = ({ field, form: { touched, errors }, options, label, ...props }) => (
  <FormControl variant="outlined" error={touched[field.name] && errors[field.name]}>
    <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
    <Select
      {...props}
      label={label}
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      {...field}
    >
      {options.map((x) => (
        <MenuItem key={x.value} value={x.value}>
          {x.text}
        </MenuItem>
      ))}
    </Select>
    {touched[field.name] && errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormControl>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  label: PropTypes.string.isRequired,
};

export default index;
