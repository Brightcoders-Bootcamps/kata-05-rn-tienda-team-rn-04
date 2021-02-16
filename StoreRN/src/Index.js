import React from 'react';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {userSelector} from './utils/selectors';
import {connect} from 'react-redux';
const Index = ({User}) => {
  return (
    <NavigationContainer>
      {!User ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    User: userSelector(state),
  };
};
export default connect(mapStateToProps, null)(Index);
