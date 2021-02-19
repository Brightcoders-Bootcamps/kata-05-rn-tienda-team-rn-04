import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {HomeStyles, ItemStyles, Constants} from './../utils/GeneralApp';
import Icon from '../components/HomeComponents/Icon';
import {colors} from '../utils/colors';
import ItemList from '../components/HomeComponents/ItemsList';

const Home = () => {
  return (
    <View style={HomeStyles.homeContainer}>
      <View>
        <ImageBackground
          source={require('./../utils/Images/supermarket.jpeg')}
          style={HomeStyles.homeBackground}></ImageBackground>

        <View style={HomeStyles.headerContainer}>
          <Icon
            iconName="bars"
            iconLibrary="FontAwesome5"
            iconSize={35}
            iconColor={colors.white}
          />
          <Text style={HomeStyles.homeTitle}>{Constants.home}</Text>
          <Icon
            iconName="shopping-cart"
            iconLibrary="Entypo"
            iconSize={35}
            iconColor={colors.white}
          />
        </View>

        <View style={ItemStyles.itemContainer}>
          <ItemList/>
        </View>

        <View style={HomeStyles.bottomIconsContainer}>
          <Icon
            iconName="shopping-store"
            iconLibrary="Fontisto"
            iconSize={30}
            iconColor={colors.gray}
          />
          <Icon
            iconName="star-box-multiple-outline"
            iconLibrary="MaterialCommunityIcons"
            iconSize={30}
            iconColor={colors.gray}
          />
          <Icon
            iconName="pluscircle"
            iconLibrary="AntDesign"
            iconSize={65}
            iconColor={colors.gray}
          />
          <Icon
            iconName="shoppingcart"
            iconLibrary="AntDesign"
            iconSize={30}
            iconColor={colors.gray}
          />
          <Icon
            iconName="bell"
            iconLibrary="FontAwesome5"
            iconSize={30}
            iconColor={colors.gray}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
