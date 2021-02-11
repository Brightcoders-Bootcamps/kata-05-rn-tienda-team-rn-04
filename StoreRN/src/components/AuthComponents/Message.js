import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles, ConstantLogIn} from './../../utils/Auth';

const Message = ({navigation, RouteToGo, message}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(RouteToGo)}>
      <Text style={styles.textBottom}>{message}</Text>
    </TouchableOpacity>
  );
};

export default Message;
