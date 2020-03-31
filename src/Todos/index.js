import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoActions from './todoActions';
// import PropTypes from 'prop-types';
import styles from './styles';
import { statusText } from '../constants';
// import User from './user';

// class -> extend component/PureComponent(cant use shouldComponent Life cycle method)
// -> data manupulate / add logic
// -> state
// -> life cycle

// performace impacting lcm
// -> shouldComponentUpdate / PureComponent
// -> componentWillUnmount

// function -> with memo/ without memo
// -> Only For UI (props base)
// -> Always Use Memo

// mounting
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// update
// -> getDerivedStateFrmProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// unmount
// -> componentWillUnmount

// error
// -> componentDidCatch
// -> getDerivedStateFromError

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      status: statusText[0],
      loading: false,
      error: false,
    };
    // this.loadData();
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidCatch(error, info) {
    console.warn(error);
    console.warn(info);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: error.message };
  }

  loadData = async () => {
    this.setState({ loading: true });
    try {
      const res = await fetch('http://localhost:3004/todos');
      const todoList = await res.json();
      this.setState({ todoList });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  addTodo = async (data) => {
    console.warn('rdnet add todo');
    this.setState({ loading: true });
    try {
      const res = await fetch('http://localhost:3004/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newTodo = await res.json();
      const { todoList } = this.state;
      this.setState({ todoList: [newTodo, ...todoList] }, () => {
        // console.log(this.todoText);
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  updateTodo = async (data) => {
    this.setState({ loading: true });
    try {
      const res = await fetch(`http://localhost:3004/todos/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedTodo = await res.json();
      const { todoList } = this.state;
      const updatedTodoList = todoList.map((x) => {
        if (x.id === updatedTodo.id) {
          return updatedTodo;
        }
        return x;
      });
      this.setState({ todoList: updatedTodoList });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteTodo = async (id) => {
    this.setState({ loading: true });
    try {
      await fetch(`http://localhost:3004/todos/${id}`, {
        method: 'DELETE',
      });
      const { todoList } = this.state;
      this.setState({ todoList: todoList.filter((x) => x.id !== id) });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  submit = async (e) => {
    e.preventDefault();
    const { value } = this.todoText;
    if (value) {
      await this.addTodo({ text: value, isDone: false });
      this.todoText.value = '';
    }
  };

  completeTodo = (todo) => {
    this.updateTodo({ ...todo, isDone: !todo.isDone });
    // [
    //     ...todoList.slice(0, i),
    //     { ...todoList[i], isDone: !todoList[i].isDone },
    //     ...todoList.slice(i + 1),
    //   ]
  };

  // deleteTodo = (id) => {
  //   this.deleteTodo(id);
  // };

  changeStatus = (status) => {
    this.setState({ status });
  };

  render() {
    const { todoList, status, error, loading } = this.state;
    if (error) {
      return <h2 style={{ color: 'red' }}>{error}</h2>;
    }

    if (loading) {
      return <h3 style={{ color: 'blue' }}>Loading...</h3>;
    }

    return (
      <div
        style={{
          ...styles.row,
          ...styles.hCenter,
          ...styles.flex,
        }}
      >
        {/* <h1>{user.name}</h1> */}
        <h3 id="h3">To-Do App</h3>
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
