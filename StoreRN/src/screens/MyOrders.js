import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {HomeStyles, ItemStyles, Constants} from './../utils/GeneralApp';
import {colors} from '../utils/colors';
import ItemList from '../components/HomeComponents/ItemsListMyOrder';
import Header from '../components/HomeComponents/Header';
import Bottom from '../components/HomeComponents/Bottom';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View style={HomeStyles.homeContainer}>
      <View>
        <ImageBackground
          source={require('./../utils/Images/supermarket.jpeg')}
          style={HomeStyles.homeBackground}></ImageBackground>
        <Header
          colorIcons={colors.white}
          title={Constants.titleMyOrder}
          styleTitle={HomeStyles.homeTitle}
          navigation={navigation}
        />
        <View style={HomeStyles.containerSubtotal}>
          <Text style={HomeStyles.textSubtotal}>SubTotal = 132$</Text>
          <TouchableOpacity style={ItemStyles.checkOutBtn}>
                <Text style={ItemStyles.textBtnCheckout}>{Constants.checkOutTitle}</Text>
          </TouchableOpacity>
        </View>
        <View style={ItemStyles.itemContainer}>
          <ItemList navigation={navigation} />
        </View>
        <Bottom />
      </View>
    </View>
  );
};

export default Home;
