import React from 'react';
import AuthNavigator from './navigation/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
const Index = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Index;
