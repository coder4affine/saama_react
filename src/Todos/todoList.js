import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { statusText } from '../constants';
import styles from './styles';

const TodoList = ({ todoList, status, completeTodo, deleteTodo }) => {
  console.log('render TodoList');
  return (
    <div style={styles.flex}>
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
          <div
            key={todo.id}
            style={{
              ...styles.display,
              ...styles.margin,
            }}
          >
            <input type="checkbox" checked={todo.isDone} onChange={() => completeTodo(todo)} />
            <span
              style={{
                ...styles.flex,
                textDecoration: todo.isDone ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
