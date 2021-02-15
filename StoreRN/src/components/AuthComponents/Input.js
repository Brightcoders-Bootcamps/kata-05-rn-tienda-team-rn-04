import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './../../utils/Auth';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useInputValue} from '../../hooks';
const Input = ({
  placeholderTxt,
  iconName,
  userValues,
  setUserValues,
  handleChange,
}) => {
  const inputValue = useInputValue(iconName, userValues);
  return (
    <View style={styles.input}>
      <AntDesignIcon name={iconName} color="gray" size={25} style={{marginStart: 15}} />
      <TextInput
        placeholder={placeholderTxt}
        placeholderTextColor="gray"
        style={styles.textInput}
        value={inputValue}
        onChangeText={(value) => handleChange(userValues, setUserValues, value)}
        secureTextEntry={placeholderTxt === 'Password' && true}
      />
    </View>
  );
};
const handleChangeName = (userValues, setUserValues, newValue) => {
  setUserValues({...userValues, name: newValue});
};

export default Input;
