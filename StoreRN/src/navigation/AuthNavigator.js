import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import Start from '../screens/Start';
import MyOrder from '../screens/MyOrders';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
