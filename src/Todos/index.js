import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './styles';

class index extends Component {
  state = {
    todoList: [],
  };

  submit = () => {
    const { value } = this.todoText;
    if (value) {
      const { todoList } = this.state;
      this.setState(
        {
          todoList: [{ text: value, id: new Date().getTime(), isDone: false }, ...todoList],
        },
        () => {
          this.todoText.value = '';
        },
      );
    }
  };

  completeTodo = (todo) => {
    const { todoList } = this.state;
    // const i = todoList.findIndex((x) => x.id === todo.id);
    const updatedTodoList = todoList.map((x) => {
      if (x.id === todo.id) {
        return { ...x, isDone: !x.isDone };
      }
      return x;
    });

    this.setState({
      todoList: updatedTodoList,
    });

    // [
    //     ...todoList.slice(0, i),
    //     { ...todoList[i], isDone: !todoList[i].isDone },
    //     ...todoList.slice(i + 1),
    //   ]
  };

  deleteTodo = (id) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((x) => x.id !== id),
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div
        style={{
          ...styles.row,
          ...styles.hCenter,
          flex: 1,
        }}
      >
        <h3>To-Do App</h3>
        <div>
          <input
            type="text"
            ref={(ref) => {
              this.todoText = ref;
            }}
          />
          <button type="button" onClick={this.submit}>
            Add Todo
          </button>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <div style={{ flex: 1 }}>
            {todoList.map((todo) => (
              <div
                key={todo.id}
                style={{
                  margin: 10,
                  display: 'flex',
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => this.completeTodo(todo)}
                />
                <span
                  style={{
                    flex: 1,
                    textDecoration: todo.isDone ? 'line-through' : 'none',
                  }}
                >
                  {todo.text}
                </span>
                <button type="button" onClick={() => this.deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <button style={{ flex: 1 }} type="button">
              All
            </button>
            <button style={{ flex: 1 }} type="button">
              Pending
            </button>
            <button style={{ flex: 1 }} type="button">
              Completed
            </button>
          </div>
        </div>
      </div>
    );
  }
}

index.propTypes = {};

export default index;
