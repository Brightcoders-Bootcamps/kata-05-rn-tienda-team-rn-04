import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {DrawerStyles} from '../../utils/GeneralApp';
import {useIconMenu} from '../../hooks';
import {logoutFunction} from '../../../redux/actions/AuthActions';
import {connect} from 'react-redux';
const ItemLogout = ({
  title,
  iconLibrary,
  iconSize,
  iconColor,
  iconName,
  logoutFunction,
}) => {
  return (
    <TouchableOpacity style={DrawerStyles.item} onPress={logoutFunction}>
      <View style={DrawerStyles.iconContainer}>
        {useIconMenu(iconName, iconLibrary, iconSize, iconColor)}
      </View>
      <View style={DrawerStyles.textContainer}>
        <Text style={DrawerStyles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = {logoutFunction};
export default connect(null, mapDispatchToProps)(ItemLogout);
