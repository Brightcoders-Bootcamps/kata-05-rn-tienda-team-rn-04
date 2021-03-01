import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HomeStyles, ItemStyles, Constants} from '../utils/GeneralApp';
import {styles} from '../utils/Auth';
import Bottom from '../components/HomeComponents/Bottom';

const OrderPlaced = ({navigation}) => {
  const [num] = useState(Math.floor(Math.random() * 10 + 1));
  return (
    <View style={[HomeStyles.homeContainer]}>
      <View>
        <ImageBackground
          source={require('./../utils/Images/supermarket.jpeg')}
          style={HomeStyles.homeBackground}
        />
        <View style={[ItemStyles.itemContainer, {marginTop: '25%'}]}>
          <View style={{marginTop: -70, marginBottom: 200}}>
            <Image
              source={require('../utils/Images/store.png')}
              style={styles.imageStart}
            />
          </View>
          <Text style={styles.text}>{Constants.orderPlaced}</Text>
          <Text style={styles.text}>{Constants.orderNumber}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.numText}>#{num}</Text>
          </TouchableOpacity>
        </View>
        <Bottom />
      </View>
    </View>
  );
};

export default OrderPlaced;
