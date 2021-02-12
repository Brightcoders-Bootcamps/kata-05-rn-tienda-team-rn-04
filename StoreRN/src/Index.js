import React from 'react';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
const Index = ({Auth}) => {
  console.log(Auth);
  return (
    <NavigationContainer>
      {!Auth.user ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    Auth: state.Auth,
  };
};
export default connect(mapStateToProps, null)(Index);
