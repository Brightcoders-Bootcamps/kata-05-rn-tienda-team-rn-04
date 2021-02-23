import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
const Drawer = createDrawerNavigator();
import DrawerContent from '../components/DrawerComponents/DrawerContent';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#6ED8CC'}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={AppNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
