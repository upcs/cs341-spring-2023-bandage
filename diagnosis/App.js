import React from 'react';

//screens import
import Login from './screens/Login';
import Multimedia from './screens/Multimedia';
import Signup from './screens/Signup';
import MainMenu from './screens/MainMenu';
import StackNavigator from './navigators/StackNavigator';
import Topics from './screens/Topics';

export default function App() {
  return <StackNavigator />;
}