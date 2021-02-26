import React from 'react';
import {View, Text} from 'react-native';
import Icon from './Icon';
import DeleteIcon from './DeleteIcon';
import {HomeStyles} from '../../utils/GeneralApp';

const Header = ({colorIcons, title, styleTitle, navigation}) => {
  return (
    <View
      style={[
        HomeStyles.headerContainer,
        {height: title === 'Home' ? '15%' : '9%'},
      ]}>
      <Icon
        iconName="bars"
        iconLibrary="FontAwesome5"
        iconSize={35}
        iconColor={colorIcons}
        navigation={navigation}
        RouteToGo={'Drawer'}
      />
      <Text style={styleTitle}>{title}</Text>
      <DeleteIcon
        handlePress={() => navigation.navigate('MyOrder')}
        iconName="shopping-cart"
        iconLibrary="Entypo"
        iconSize={35}
        iconColor={colorIcons}
      />
    </View>
  );
};

export default Header;
