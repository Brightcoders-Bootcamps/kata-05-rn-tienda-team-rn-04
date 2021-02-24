import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {useIconMenu} from '../../hooks';
import {DrawerStyles, Constants} from '../../utils/GeneralApp';
import Item from './Item';
import ItemLogout from './ItemLogout';
const DrawerContent = (props) => {
  return (
    <View style={DrawerStyles.big}>
      <Text style={DrawerStyles.title}>{Constants.vegetablely}</Text>
      <View style={DrawerStyles.circle}>
        <Image
          source={require('../../utils/Images/store.png')}
          style={{height: 60, width: 60}}
        />
      </View>
      <TouchableOpacity
        style={{marginLeft: 22, marginBottom: 10}}
        onPress={() => props.navigation.closeDrawer()}>
        {useIconMenu('menu', 'Entypo', 30, '#FFF')}
      </TouchableOpacity>
      <DrawerItem
        label={() => (
          <Item
            navigation={props.navigation}
            RouteToGo="Home_1"
            title={'Home'}
            iconName="home"
            iconLibrary="Entypo"
            iconSize={25}
            iconColor={'#FFF'}
          />
        )}
      />
      <DrawerItem
        label={() => (
          <Item
            navigation={props.navigation}
            title={'My Order'}
            RouteToGo="MyOrder"
            iconName="shoppingcart"
            iconLibrary="AntDesign"
            iconSize={25}
            iconColor={'#FFF'}
          />
        )}
      />
      <DrawerItem
        label={() => (
          <Item
            title={'Offers'}
            iconName="tag"
            iconLibrary="AntDesign"
            iconSize={25}
            iconColor={'#FFF'}
          />
        )}
      />
      <DrawerItem
        label={() => (
          <Item
            title={'Notifications'}
            iconName="bell"
            iconLibrary="FontAwesome"
            iconSize={25}
            iconColor={'#FFF'}
          />
        )}
      />
      <DrawerItem
        label={() => (
          <Item
            title={'Our Branches'}
            iconName="store-alt"
            iconLibrary="FontAwesome5"
            iconSize={22}
            iconColor={'#FFF'}
          />
        )}
      />
      <DrawerItem
        label={() => (
          <Item
            title={'Contact Us'}
            iconName="phone"
            iconLibrary="FontAwesome"
            iconSize={25}
            iconColor={'#FFF'}
          />
        )}
      />
      <DrawerItem
        label={() => (
          <Item
            title={'Feedback'}
            iconName="feedback"
            iconLibrary="MaterialIcons"
            iconSize={25}
            iconColor={'#FFF'}
          />
        )}
      />
      <DrawerItem
        label={() => (
          <ItemLogout
            title={'Logout'}
            iconName="logout"
            iconLibrary="MaterialIcons"
            iconSize={25}
            iconColor={'#FFF'}
          />
        )}
      />
    </View>
  );
};

export default DrawerContent;
