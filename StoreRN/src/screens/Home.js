import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {HomeStyles, ItemStyles, Constants} from './../utils/GeneralApp';
import {colors} from '../utils/colors';
import ItemList from '../components/HomeComponents/ItemsList';
import Header from '../components/HomeComponents/Header';
import Bottom from '../components/HomeComponents/Bottom';


const Home = ({navigation}) => {
  return (
    <View style={HomeStyles.homeContainer}>
      <View>
        <ImageBackground
          source={require('./../utils/Images/supermarket.jpeg')}
          style={HomeStyles.homeBackground}></ImageBackground>
        <Header
          colorIcons={colors.white}
          title={Constants.Home}
          styleTitle={HomeStyles.homeTitle}
          navigation={navigation}
        />
        <View style={ItemStyles.itemContainer}>
          <ItemList navigation={navigation} />
        </View>
        <Bottom />
      </View>
    </View>
  );
};


export default Home;
