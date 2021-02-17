import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {styles, Constants} from './../utils/GeneralApp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <View>
        <ImageBackground
          source={require('./../utils/Images/supermarket.jpeg')}
          style={styles.homeBackground}></ImageBackground>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => alert('Toggle for sidebar')}>
            <FontAwesome5 name="bars" color="white" size={32} />
          </TouchableOpacity>
          <Text style={styles.homeTitle}>{Constants.home}</Text>
          <TouchableOpacity onPress={() => alert('Shopping cart')}>
            <Entypo name="shopping-cart" color="white" size={32} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <Text>All items will be here!</Text>
        </View>
        <View style={styles.bottomIconsContainer}>
          <TouchableOpacity onPress={() => alert('Store')}>
            <Fontisto style={styles.bottomIcons} name="shopping-store" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Idk what is that')}>
            <MaterialCommunityIcons
              style={styles.bottomIcons}
              name="star-box-multiple-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Plus icon')}>
            <AntDesign name="pluscircle" color="gray" size={65} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Shopping cart again')}>
            <AntDesign name="shoppingcart" style={styles.bottomIcons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Notifications')}>
            <FontAwesome5 style={styles.bottomIcons} name="bell" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
