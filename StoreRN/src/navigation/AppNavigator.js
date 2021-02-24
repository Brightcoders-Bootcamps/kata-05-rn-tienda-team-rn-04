import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from './../screens/Home';
import Details from './../screens/Details';
import MyOrder from './../screens/MyOrders'

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
