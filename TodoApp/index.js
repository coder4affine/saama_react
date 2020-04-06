/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import TodoApp from './src/TodoApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TodoApp);
