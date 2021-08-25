/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  StatusBar,
  useColorScheme
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { CustomNavigation } from './src/components/customNavigation/customNavigation'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#22c181" />
        <CustomNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App
