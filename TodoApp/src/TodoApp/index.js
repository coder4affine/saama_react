import React, {useState, useRef, useEffect, memo} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoActions from './todoActions';
// import PropTypes from 'prop-types';
import styles from './styles';
import {statusText} from '../constants';

const Index = () => {
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState(statusText[0]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
    console.warn('data', data);
    setTodoList(data);
  };

  useEffect(() => {
    loadData();
  }, []);

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
    const updatedTodo = await apiCall(
      `http://localhost:3004/todos/${data.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
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

  const submit = async () => {
    const {value} = inputText.current;
    if (value) {
      await addTodo({text: value, isDone: false});
      // this.todoText.value = '';
    }
  };

  const completeTodo = (todo) => {
    updateTodo({...todo, isDone: !todo.isDone});
  };

  const changeStatus = (data) => {
    setStatus(data);
  };

  if (error) {
    return (
      <SafeAreaView>
        <Text style={{color: 'red'}}>{error.message}</Text>
      </SafeAreaView>
    );
  }

  if (loading) {
    return (
      <SafeAreaView>
        <Text style={{color: 'blue'}}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.row, styles.hCenter, styles.flex]}>
      <Text>To-Do App</Text>
      <TodoForm submit={submit} inputRef={inputText} />
      <View style={styles.innerContainer}>
        <TodoList
          todoList={todoList}
          status={status}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
        <TodoActions changeStatus={changeStatus} />
      </View>
    </SafeAreaView>
  );
};

export default memo(Index);
