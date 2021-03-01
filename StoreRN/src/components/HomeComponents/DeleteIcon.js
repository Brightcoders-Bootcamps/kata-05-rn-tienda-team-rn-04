import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useIconMenu} from '../../hooks';

const DeleteIcon = ({
  handlePress,
  iconName,
  iconLibrary,
  iconSize,
  iconColor,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      {useIconMenu(iconName, iconLibrary, iconSize, iconColor)}
    </TouchableOpacity>
  );
};

export default DeleteIcon;
