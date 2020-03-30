import React, { PureComponent } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoActions from './todoActions';
// import PropTypes from 'prop-types';
import styles from './styles';
import { statusText } from '../constants';
// import User from './user';

class index extends PureComponent {
  state = {
    todoList: [],
    status: statusText[0],
    // user: {
    //   name: 'yagnesh',
    // },
  };

  submit = (e) => {
    e.preventDefault();
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

  changeStatus = (status) => {
    this.setState({ status });
  };

  render() {
    console.log('render index');
    const { todoList, status } = this.state;
    return (
      <div
        style={{
          ...styles.row,
          ...styles.hCenter,
          ...styles.flex,
        }}
      >
        {/* <h1>{user.name}</h1> */}
        <h3>To-Do App</h3>
        {/* <User user={user} />

        <button
          type="button"
          onClick={() => {
            this.setState({
              user: { ...user, name: 'rohit' },
            });
          }}
        >
          Change name
        </button> */}
        <TodoForm
          submit={this.submit}
          inputRef={(ref) => {
            this.todoText = ref;
          }}
        />
        <div style={styles.innerContainer}>
          <TodoList
            todoList={todoList}
            status={status}
            completeTodo={this.completeTodo}
            deleteTodo={this.deleteTodo}
          />
          <TodoActions changeStatus={this.changeStatus} />
        </div>
      </div>
    );
  }
}

index.propTypes = {};

export default index;
