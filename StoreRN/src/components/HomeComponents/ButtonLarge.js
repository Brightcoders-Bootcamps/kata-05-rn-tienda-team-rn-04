import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../utils/Auth';
import {saveProductMultiplier} from '../../utils/functions';

const ButtonLarge = ({navigation, RouteGo, buttonTitle, item, add_product, count }) => {
    return (
      <TouchableOpacity
        style={styles.btnLargeDetailContainer}
        onPress={() => {
          saveProductMultiplier(count, add_product, item)
          navigation.navigate(RouteGo)
          }}>
        <Text style={styles.btnLargeDetailText}> {buttonTitle} </Text>
      </TouchableOpacity>
    );
  };

  export default ButtonLarge;
  