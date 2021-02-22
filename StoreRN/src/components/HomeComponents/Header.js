import React from 'react';
import {View, Text} from 'react-native';
import Icon from './Icon';
import {colors} from '../../utils/colors';
import {HomeStyles, Constants} from '../../utils/GeneralApp';

const Header = ({colorIcons, title, styleTitle}) => {
    return(
        <View style={HomeStyles.headerContainer}>
        <Icon
          iconName="bars"
          iconLibrary="FontAwesome5"
          iconSize={35}
          iconColor={colorIcons}
        />
        <Text style={styleTitle}>{title}</Text>
        <Icon
          iconName="shopping-cart"
          iconLibrary="Entypo"
          iconSize={35}
          iconColor={colorIcons}
        />
      </View>
    )
};

export default Header;