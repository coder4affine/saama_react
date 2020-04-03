import React from 'react';
import ReactDOM from 'react-dom';
import { registerObserver } from 'react-perf-devtool';
import App from './app';
// import Todos from './Todos';
import './main.css';

const options = {
  shouldLog: true,
  port: 8080,
};

function callback() {}

registerObserver(options, callback);

ReactDOM.render(<App />, document.getElementById('root'));
