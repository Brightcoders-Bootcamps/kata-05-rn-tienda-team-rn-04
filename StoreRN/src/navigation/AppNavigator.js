import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from './../screens/Home';
import Details from './../screens/Details';
import MyOrder from './../screens/MyOrders';
import OrderPlaced from './../screens/OrderPlaced';
import Orders from './../screens/Orders';
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}} initialRouteName='Orders'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
