import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
const Drawer = createDrawerNavigator();
import DrawerContent from '../components/DrawerComponents/DrawerContent';
import Home from './../screens/Home';
import MyOrder from './../screens/MyOrders'

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#6ED8CC'}}
      drawerContent={(props) => <DrawerContent {...props} />}>  
      <Drawer.Screen name="Home" component={AppNavigator} />
      <Drawer.Screen name="Home_1" component={Home} /> 
      <Drawer.Screen name="MyOrder" component={MyOrder} /> 
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
