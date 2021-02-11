import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles, ConstantLogIn} from './../utils/Auth';
import BtnLogin from './../components/AuthComponents/Button';
import Title from '../components/AuthComponents/Title';
import Message from '../components/AuthComponents/Message';
import InputLogin from './../components/AuthComponents/Input';
const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title styles={styles.textHeader} title={ConstantLogIn.createAccount} />
      <InputLogin placeholderTxt={ConstantLogIn.fullName} iconName='user'/>
      <InputLogin placeholderTxt={ConstantLogIn.inputEmail} iconName='mail' />
      <InputLogin placeholderTxt={ConstantLogIn.inputPass} iconName='lock' />
      <BtnLogin
        navigation={navigation}
        RouteToGo="LogIn"
        buttonTitle={ConstantLogIn.createAccount}
      />
      <Message
        RouteToGo={ConstantLogIn.routeSingIn}
        navigation={navigation}
        message={ConstantLogIn.singIn}
      />
    </View>
  );
};

export default SignUp;
