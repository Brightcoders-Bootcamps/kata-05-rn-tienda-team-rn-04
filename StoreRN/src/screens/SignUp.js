import React, {useState} from 'react';
import {View, ImageBackground} from 'react-native';
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
      <View>
        <ImageBackground source={require ('../utils/Images/supermarket.jpeg')} style={styles.Background}></ImageBackground> 
      </View>
      <View style={styles.containerAccount}>
        <Title styles={styles.textHeader} title={ConstantLogIn.createAccount} />
        <View style={styles.containerInputs}>
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
          </View>
          <BtnLogin
            RouteToGo="LogIn"
            iconName="arrowright"
            buttonTitle={ConstantLogIn.createAccount}
            handleSubmit={signUpFunction}
            userValues={userValues}
          />
      </View>
      <View style={styles.containerMessage}>
        <Message
          RouteToGo={ConstantLogIn.routeSingIn}
          navigation={navigation}
          message={ConstantLogIn.singIn}
        /> 
      </View> 
    </View>
  );
};

export default SignUp;
