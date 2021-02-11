import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../utils/Auth';
const Button = ({buttonTitle, navigation, RouteToGo}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => navigation.navigate(RouteToGo)}>
      <Text style={styles.btnText}> {buttonTitle} </Text>
    </TouchableOpacity>
  );
};

export default Button;
