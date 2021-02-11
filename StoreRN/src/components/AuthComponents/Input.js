import React from 'react';
import {TextInput, View} from 'react-native';
import {styles, ConstantLogIn} from './../../utils/Auth';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Input = ({placeholderTxt, iconName}) => {
    
  return (
    <View style={styles.input}>
      <AntDesignIcon name={iconName} color="gray" size={25} />
      <TextInput placeholder={placeholderTxt} placeholderTextColor="black" />
    </View>
  );
};

export default Input;
