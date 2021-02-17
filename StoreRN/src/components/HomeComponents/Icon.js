import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useIconMenu} from '../../hooks'

const Icon = ({iconName, handlePress, iconLibrary, iconSize, iconColor}) => {
  return (
    <TouchableOpacity>
      {useIconMenu(iconName, iconLibrary, iconSize, iconColor)}
    </TouchableOpacity>
  );
};

export default Icon;
