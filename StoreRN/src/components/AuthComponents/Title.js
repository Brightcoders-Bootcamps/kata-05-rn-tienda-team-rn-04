import React from 'react';
import {View, Text} from 'react-native';

const Title = ({title, styles}) => {
  return (
    <View>
      <Text style={styles}>{title}</Text>
    </View>
  );
};

export default Title;
