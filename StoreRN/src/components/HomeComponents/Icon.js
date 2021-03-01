import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useIconMenu} from '../../hooks';

const Icon = ({
  iconName,
  navigation,
  RouteToGo,
  iconLibrary,
  iconSize,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      onPress={RouteToGo ? () => navigation.openDrawer() : null}>
      {useIconMenu(iconName, iconLibrary, iconSize, iconColor)}
    </TouchableOpacity>
  );
};

export default Icon;
