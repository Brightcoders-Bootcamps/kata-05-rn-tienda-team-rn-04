import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../utils/Auth';

const ButtonLarge = ({navigation, RouteGo, buttonTitle}) => {
    return (
      <TouchableOpacity
        style={styles.btnLargeContainer}
        onPress={() => navigation.navigate(RouteGo)}>
        <Text style={styles.btnLargeText}> {buttonTitle} </Text>
      </TouchableOpacity>
    );
  };

  export default ButtonLarge;
  