import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BtnLogin from './../components/Button';
import {styles, ConstantLogIn} from '../utils/Auth';

const LogIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BtnLogin
        RouteToGo={ConstantLogIn.routeSingIn}
        buttonTitle={ConstantLogIn.singInButton}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(ConstantLogIn.routeSingUp)}>
        <Text>{ConstantLogIn.singInCreateAccount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
