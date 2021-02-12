import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {View, Text} from 'react-native';
const sss = () => {
  return <Text>Bienvenido!</Text>;
};
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={sss} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
