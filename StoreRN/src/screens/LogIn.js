import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BtnLogin from './../components/AuthComponents/Button';
import InputLogin from './../components/AuthComponents/Input';
import {styles, ConstantLogIn} from './../utils/Auth';
import Title from '../components/AuthComponents/Title';
import Message from '../components/AuthComponents/Message';
const LogIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title styles={styles.textHeader} title={ConstantLogIn.singIn} />
      <InputLogin placeholderTxt={ConstantLogIn.inputEmail} iconName='user' />
      <InputLogin placeholderTxt={ConstantLogIn.inputPass} iconName='mail'/>
      <BtnLogin
        RouteToGo={ConstantLogIn.routeSingIn}
        buttonTitle={ConstantLogIn.singIn}
      />
      <Message
        RouteToGo={ConstantLogIn.routeSingUp}
        navigation={navigation}
        message={ConstantLogIn.createAccount}
      />
    </View>
  );
};

export default LogIn;
