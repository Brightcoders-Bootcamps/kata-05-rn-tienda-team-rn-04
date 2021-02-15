import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../utils/Auth';
import {signUpFunction} from '../../../redux/actions/AuthActions';
import {connect} from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Button = ({buttonTitle, userValues, signUpFunction, iconName}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => signUpFunction('juan@mail.com', '123')}>
      <AntDesignIcon name={iconName} color="white" size={25} style={{marginEnd: 5}}/>
      <Text style={styles.btnText}> {buttonTitle} </Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  signUpFunction,
};
export default connect(null, {signUpFunction})(Button);
