import React from 'react';
import {View} from 'react-native';
import Icon from './Icon';
import {colors} from '../../utils/colors';
import {HomeStyles} from '../../utils/GeneralApp';

const Bottom = () => {
  return (
    <View style={HomeStyles.bottomIconsContainer}>
      <Icon
        iconName="shopping-store"
        iconLibrary="Fontisto"
        iconSize={30}
        iconColor={colors.green}
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
  );
};

export default Bottom;
