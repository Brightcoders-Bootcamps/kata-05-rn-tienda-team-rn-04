import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../utils/Auth';
import {signUpFunction} from '../../../redux/actions/AuthActions';
import {connect} from 'react-redux';
const Button = ({buttonTitle, userValues, signUpFunction}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => signUpFunction('juan@mail.com', '123')}>
      <Text style={styles.btnText}> {buttonTitle} </Text>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {
  signUpFunction,
};
export default connect(null, {signUpFunction})(Button);
