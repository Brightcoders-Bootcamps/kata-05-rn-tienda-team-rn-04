import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { DrawerStyles } from "../../utils/GeneralApp";
import {useIconMenu} from '../../hooks';

const Item = ({
    title,
    iconLibrary,
    iconSize,
    iconColor,
    iconName,
    RouteToGo,
    navigation,
  }) => {
    return (
      <TouchableOpacity
        style={DrawerStyles.item}
        onPress={RouteToGo ? () => navigation.navigate(RouteToGo) : null}>
        <View style={DrawerStyles.iconContainer}>
          {useIconMenu(iconName, iconLibrary, iconSize, iconColor)}
        </View>
        <View style={DrawerStyles.textContainer}>
          <Text style={DrawerStyles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

export default Item;