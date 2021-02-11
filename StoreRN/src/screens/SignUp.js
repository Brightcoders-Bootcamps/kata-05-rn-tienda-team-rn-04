import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles, ConstantLogIn} from '../utils/Auth';
import BtnLogin from './../components/Button';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BtnLogin
        navigation={navigation}
        RouteToGo="LogIn"
        buttonTitle={ConstantLogIn.singUpButton}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(ConstantLogIn.routeSingIn)}>
        <Text>{ConstantLogIn.singInTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
