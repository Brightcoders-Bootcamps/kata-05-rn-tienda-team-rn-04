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
  handlePress
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}>
      {useIconMenu(iconName, iconLibrary, iconSize, iconColor)}
    </TouchableOpacity>
  );
};

export default Icon;
