/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppRoutes from "./src/routes/AppRoutes";
import React from "react";

// const MainApp =()=> <Count/>

AppRegistry.registerComponent(appName, () => AppRoutes);
