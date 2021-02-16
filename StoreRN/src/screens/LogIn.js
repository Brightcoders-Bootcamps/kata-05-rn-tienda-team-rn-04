import React, {useState} from 'react';
import {View, ImageBackground, Text} from 'react-native';
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
      <View>
        <ImageBackground
          source={require('../utils/Images/supermarket.jpeg')}
          style={styles.Background}></ImageBackground>
      </View>
      <View style={styles.containerAccount}>
        <Title styles={styles.textHeader} title={ConstantLogIn.singIn} />
        <View style={styles.containerInputs}>
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
          <Text style={styles.textForgotPass}>{ConstantLogIn.forgotPass}</Text>
        </View>
        <BtnLogin
          userValues={userValues}
          buttonTitle={ConstantLogIn.singIn}
          iconName="arrowright"
        />
      </View>
      <View style={styles.containerMessage}>
        <Message
          RouteToGo={ConstantLogIn.routeSingUp}
          navigation={navigation}
          message={ConstantLogIn.createAccount}
        />
      </View>
    </View>
  );
};

export default LogIn;
