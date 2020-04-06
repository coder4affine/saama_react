import React, {memo} from 'react';
import {View, Button, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const todoForm = ({submit, inputRef}) => (
  <View>
    <TextInput
      style={{
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderRadius: 5,
      }}
      ref={inputRef}
    />
    <Button onPress={submit} title="Add Todo"></Button>
  </View>
);
todoForm.propTypes = {
  submit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  inputRef: PropTypes.object.isRequired,
};

export default memo(todoForm);
