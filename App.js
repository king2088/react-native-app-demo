/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/pages/tabs/tabs';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <NavigationContainer>
        <Tabs></Tabs>
      </NavigationContainer>
  );
};

export default App;
