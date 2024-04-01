import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Route from './src/Navigation/Route';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
  );
};

export default App