import React from 'react';
import ReactDOM from 'react-dom';
import { registerObserver } from 'react-perf-devtool';
import App from './app';
import ThemeContext from './contex/ThemeContext';
import LanguageContext from './contex/LocaleContext';
// import Todos from './Todos';
import './main.css';

const options = {
  shouldLog: true,
  port: 8080,
};

function callback() {}

registerObserver(options, callback);

ReactDOM.render(
  <LanguageContext>
    <ThemeContext>
      <App />
    </ThemeContext>
  </LanguageContext>,
  document.getElementById('root'),
);
