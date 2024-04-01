import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashbord from '../Screen/Dashbord';
import FxfortBuy from '../Screen/FxfortBuy';
import Fxfortp2p from '../Screen/Fxfortp2p';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Dashbord"
          component={Dashbord}
        />
        <Stack.Screen name="FxfortBuy" component={FxfortBuy} />
        <Stack.Screen name="Fxfortp2p" component={Fxfortp2p} />

      </Stack.Navigator>
  );
};


export default Route