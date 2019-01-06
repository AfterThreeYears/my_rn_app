/** @format */

import { AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
// import App from './App';
import { AppStackNavigator } from './navigatiors/Appnavigators';
import {name as appName} from './app.json';

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
