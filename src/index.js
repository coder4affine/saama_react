import React from 'react';
import ReactDOM from 'react-dom';
import { registerObserver } from 'react-perf-devtool';
import { Provider } from 'react-redux';
import App from './app';
import ThemeContext from './contex/ThemeContext';
import LanguageContext from './contex/LocaleContext';
import ProductsContextWrapper from './contex/ProductsContext';
import store from './configureStore';
// import Todos from './Todos';
import './main.css';

const options = {
  shouldLog: true,
  port: 8080,
};

function callback() {}

registerObserver(options, callback);

ReactDOM.render(
  <Provider store={store}>
    <ProductsContextWrapper>
      <LanguageContext>
        <ThemeContext>
          <App />
        </ThemeContext>
      </LanguageContext>
    </ProductsContextWrapper>
  </Provider>,
  document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
