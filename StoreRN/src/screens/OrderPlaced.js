import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {HomeStyles, ItemStyles, Constants} from '../utils/GeneralApp';
import {colors} from '../utils/colors';
import {styles} from '../utils/Auth';
import Bottom from '../components/HomeComponents/Bottom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ItemList from '../components/HomeComponents/ItemsListMyOrder';

const OrderPlaced = ({navigation}) => {
  return (
    <View style={[HomeStyles.homeContainer,{}]}>
      <View>
        <ImageBackground
          source={require('./../utils/Images/supermarket.jpeg')}
          style={HomeStyles.homeBackground}></ImageBackground>
          <View style={[ItemStyles.itemContainer, {marginTop: '30%'}]}>
              <View style={styles.containerLogo}>
                <Image  source={require('../utils/Images/store.png')} style={styles.imageStart}/>
              </View>
           <Text>{Constants.orderPlaced}</Text>
           <Text>{Constants.orderNumber}</Text>
        </View>
        <Bottom />
      </View>
    </View>
  );
};

export default OrderPlaced;
