import React, {memo} from 'react';
import CheckBox from '../assets/icons/checkBox.svg';
import {ScrollView, View, Button, Text} from 'react-native';
import PropTypes from 'prop-types';
import {statusText} from '../constants';
import styles from './styles';

const TodoList = ({todoList, status, completeTodo, deleteTodo}) => {
  return (
    <ScrollView style={styles.flex}>
      {todoList
        .filter((x) => {
          if (status === statusText[1]) {
            return !x.isDone;
          }
          if (status === statusText[2]) {
            return x.isDone;
          }
          return true;
        })
        .map((todo) => (
          <View key={todo.id} style={styles.margin}>
            {/* <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => completeTodo(todo)}
            /> */}
            <CheckBox width={24} height={24} fill="red" />
            <Text
              style={[
                styles.flex,
                {textDecoration: todo.isDone ? 'line-through' : 'none'},
              ]}>
              {todo.text}
            </Text>
            <Button onPress={() => deleteTodo(todo.id)} title="Delete"></Button>
          </View>
        ))}
    </ScrollView>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
