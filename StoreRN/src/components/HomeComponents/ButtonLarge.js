import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../utils/Auth';

const ButtonLarge = ({navigation, RouteGo, buttonTitle}) => {
    return (
      <TouchableOpacity
        style={styles.btnLargeDetailContainer}
        onPress={() => console.log('cool')}>
        <Text style={styles.btnLargeDetailText}> {buttonTitle} </Text>
      </TouchableOpacity>
    );
  };

  export default ButtonLarge;
  