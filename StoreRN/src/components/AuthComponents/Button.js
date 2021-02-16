import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../utils/Auth';
import {
  signUpFunction,
  signInFunction,
} from '../../../redux/actions/AuthActions';
import {ConstantLogIn} from '../../utils/Auth';
import {connect} from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Button = ({
  buttonTitle,
  userValues,
  signUpFunction,
  signInFunction,
  iconName,
}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() =>
        buttonTitle === ConstantLogIn.createAccount
          ? signUpFunction(userValues.email, userValues.password)
          : signInFunction(userValues.email, userValues.password)
      }>
      <AntDesignIcon
        name={iconName}
        color="white"
        size={25}
        style={{marginEnd: 5}}
      />
      <Text style={styles.btnText}> {buttonTitle} </Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  signUpFunction,
  signInFunction,
};
export default connect(null, mapDispatchToProps)(Button);
