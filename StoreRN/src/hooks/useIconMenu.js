import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const useIconMenu = (iconName, IconLibrary, iconSize, iconColor) => {
  switch (IconLibrary) {
    case 'AntDesign':
      return <AntDesign name={iconName} size={iconSize} color={iconColor} />;
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      );
    case 'FontAwesome5':
      return <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />;
    case 'Entypo':
      return <Entypo name={iconName} size={iconSize} color={iconColor} />;
    case 'Fontisto':
      return <Fontisto name={iconName} size={iconSize} color={iconColor} />;
    default:
      return null;
  }
};