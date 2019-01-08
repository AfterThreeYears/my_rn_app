/** @format */

import { AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
// import App from './App';
import AppNavigator from './navigatiors/Appnavigators';
import {name as appName} from './app.json';

const AppStackNavigatorContainer = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
