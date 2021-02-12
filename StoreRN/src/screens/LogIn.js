import React, {useState} from 'react';
import {View} from 'react-native';
import BtnLogin from './../components/AuthComponents/Button';
import InputLogin from './../components/AuthComponents/Input';
import {styles, ConstantLogIn} from './../utils/Auth';
import Title from '../components/AuthComponents/Title';
import Message from '../components/AuthComponents/Message';
import {AuthFunctions} from '../utils/functions';
const LogIn = ({navigation}) => {
  const [userValues, setUserValues] = useState({
    email: '',
    password: '',
  });
  return (
    <View style={styles.container}>
      <Title styles={styles.textHeader} title={ConstantLogIn.singIn} />
      <InputLogin
        placeholderTxt={ConstantLogIn.inputEmail}
        iconName="mail"
        userValues={userValues}
        setUserValues={setUserValues}
        handleChange={AuthFunctions.handleChangEmail}
      />
      <InputLogin
        placeholderTxt={ConstantLogIn.inputPass}
        iconName="lock"
        userValues={userValues}
        setUserValues={setUserValues}
        handleChange={AuthFunctions.handleChangePassword}
      />
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
