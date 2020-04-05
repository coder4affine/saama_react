import React, { useState, useRef, useEffect, memo } from 'react';
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

// -> if youn want to use following life cycle method use class component
// -> getSnapshotBeforeUpdate
// -> componentDidCatch
// -> getDerivedStateFromError

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

// hello data
const Index = () => {
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState(statusText[0]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [temp, setTemp] = useState(`${data}, Yagnesh`);

  const inputText = useRef(null);

  const apiCall = (url, reqInit = {}) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      fetch(url, reqInit)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          setError(err);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  const loadData = async () => {
    const data = await apiCall('http://localhost:3004/todos');
    setTodoList(data);
  };

  // componentDidMount
  useEffect(() => {
    loadData();
  }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('timer');
  //   }, 1000);

  //   console.log('useEffect', loading);
  //   return () => {
  //     console.log('unmount');
  //     clearTimeout(timer);
  //   };
  // }, [loading, error]);

  // componentWillUnmount

  const addTodo = async (data) => {
    const newTodo = await apiCall('http://localhost:3004/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.warn(newTodo);
    setTodoList([newTodo, ...todoList]);
  };

  const updateTodo = async (data) => {
    const updatedTodo = await apiCall(`http://localhost:3004/todos/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    const updatedTodoList = todoList.map((x) => {
      if (x.id === updatedTodo.id) {
        return updatedTodo;
      }
      return x;
    });
    setTodoList(updatedTodoList);
  };

  const deleteTodo = async (id) => {
    await apiCall(`http://localhost:3004/todos/${id}`, {
      method: 'DELETE',
    });
    setTodoList(todoList.filter((x) => x.id !== id));
  };

  const submit = async (e) => {
    e.preventDefault();
    const { value } = inputText.current;
    if (value) {
      await addTodo({ text: value, isDone: false });
      // this.todoText.value = '';
    }
  };

  const completeTodo = (todo) => {
    updateTodo({ ...todo, isDone: !todo.isDone });
    // [
    //     ...todoList.slice(0, i),
    //     { ...todoList[i], isDone: !todoList[i].isDone },
    //     ...todoList.slice(i + 1),
    //   ]
  };

  const changeStatus = (data) => {
    setStatus(data);
  };

  if (error) {
    return <h2 style={{ color: 'red' }}>{error.message}</h2>;
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
      <TodoForm submit={submit} inputRef={inputText} />
      <div style={styles.innerContainer}>
        <TodoList
          todoList={todoList}
          status={status}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
        <TodoActions changeStatus={changeStatus} />
      </div>
    </div>
  );
};

export default memo(Index);

// class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todoList: [],
//       status: statusText[0],
//       loading: false,
//       error: false,
//     };
//     // this.loadData();
//   }

//   componentDidMount() {
//     this.loadData();
//   }

//   componentDidCatch(error, info) {
//     console.warn(error);
//     console.warn(info);
//   }

//   static getDerivedStateFromError(error) {
//     return { error: error.message };
//   }

//   apiCall = (url, reqInit = {}) => {
//     this.setState({ loading: true });
//     return new Promise((resolve, reject) => {
//       fetch(url, reqInit)
//         .then((res) => res.json())
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((error) => {
//           reject(error);
//         })
//         .finally(() => {
//           this.setState({ loading: false });
//         });
//     });
//   };

//   loadData = async () => {
//     const todoList = await this.apiCall('http://localhost:3004/todos');
//     this.setState({ todoList });
//   };

//   addTodo = async (data) => {
//     const newTodo = await this.apiCall('http://localhost:3004/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         accept: 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     console.warn(newTodo);
//     const { todoList } = this.state;
//     this.setState({ todoList: [newTodo, ...todoList] }, () => {
//       // console.log(this.todoText);
//     });
//   };

//   updateTodo = async (data) => {
//     const updatedTodo = await this.apiCall(`http://localhost:3004/todos/${data.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         accept: 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     const { todoList } = this.state;
//     const updatedTodoList = todoList.map((x) => {
//       if (x.id === updatedTodo.id) {
//         return updatedTodo;
//       }
//       return x;
//     });
//     this.setState({ todoList: updatedTodoList });
//   };

//   deleteTodo = async (id) => {
//     await this.apiCall(`http://localhost:3004/todos/${id}`, {
//       method: 'DELETE',
//     });
//     const { todoList } = this.state;
//     this.setState({ todoList: todoList.filter((x) => x.id !== id) });
//   };

//   submit = async (e) => {
//     e.preventDefault();
//     const { value } = this.todoText;
//     if (value) {
//       await this.addTodo({ text: value, isDone: false });
//       // this.todoText.value = '';
//     }
//   };

//   completeTodo = (todo) => {
//     this.updateTodo({ ...todo, isDone: !todo.isDone });
//     // [
//     //     ...todoList.slice(0, i),
//     //     { ...todoList[i], isDone: !todoList[i].isDone },
//     //     ...todoList.slice(i + 1),
//     //   ]
//   };

//   changeStatus = (status) => {
//     this.setState({ status });
//   };

//   render() {
//     const { todoList, status, error, loading } = this.state;
//     if (error) {
//       return <h2 style={{ color: 'red' }}>{error}</h2>;
//     }

//     if (loading) {
//       return <h3 style={{ color: 'blue' }}>Loading...</h3>;
//     }

//     return (
//       <div
//         style={{
//           ...styles.row,
//           ...styles.hCenter,
//           ...styles.flex,
//         }}
//       >
//         {/* <h1>{user.name}</h1> */}
//         <h3 id="h3">To-Do App</h3>
//         {/* <User user={user} />

//         <button
//           type="button"
//           onClick={() => {
//             this.setState({
//               user: { ...user, name: 'rohit' },
//             });
//           }}
//         >
//           Change name
//         </button> */}
//         <TodoForm
//           submit={this.submit}
//           inputRef={(ref) => {
//             this.todoText = ref;
//           }}
//         />
//         <div style={styles.innerContainer}>
//           <TodoList
//             todoList={todoList}
//             status={status}
//             completeTodo={this.completeTodo}
//             deleteTodo={this.deleteTodo}
//           />
//           <TodoActions changeStatus={this.changeStatus} />
//         </div>
//       </div>
//     );
//   }
// }

// index.propTypes = {};

// export default index;
