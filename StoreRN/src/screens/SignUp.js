import React, {useState} from 'react';
import {View} from 'react-native';
import {styles, ConstantLogIn} from './../utils/Auth';
import BtnLogin from './../components/AuthComponents/Button';
import Title from '../components/AuthComponents/Title';
import Message from '../components/AuthComponents/Message';
import InputLogin from './../components/AuthComponents/Input';
import {AuthFunctions} from '../utils/functions';

const SignUp = ({navigation, signUpFunction}) => {
  const [userValues, setUserValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <Title styles={styles.textHeader} title={ConstantLogIn.createAccount} />
      <InputLogin
        placeholderTxt={ConstantLogIn.fullName}
        iconName="user"
        userValues={userValues}
        setUserValues={setUserValues}
        handleChange={AuthFunctions.handleChangeName}
      />
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
        RouteToGo="LogIn"
        buttonTitle={ConstantLogIn.createAccount}
        handleSubmit={signUpFunction}
        userValues={userValues}
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
