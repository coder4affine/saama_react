import React, {memo} from 'react';
import {View, Button} from 'react-native';
import PropTypes from 'prop-types';
import {statusText} from '../constants';
import styles from './styles';

const todoActions = ({changeStatus}) => {
  return (
    <View style={styles.display}>
      <Button
        style={[styles.flex, styles.center]}
        onPress={() => changeStatus(statusText[0])}
        title="All"></Button>
      <Button
        style={[styles.flex, styles.center]}
        onPress={() => changeStatus(statusText[1])}
        title="Pending"></Button>
      <Button
        style={[styles.flex, styles.center]}
        onPress={() => changeStatus(statusText[2])}
        title="Completed"></Button>
    </View>
  );
};

todoActions.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default memo(todoActions);
