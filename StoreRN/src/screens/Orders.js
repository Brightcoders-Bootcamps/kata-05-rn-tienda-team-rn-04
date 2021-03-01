import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import Accordion from '../components/HomeComponents/Accordion';
import {getOrdersFunction} from '../../redux/actions/OrdersActions';
import firebase from '@react-native-firebase/app';
const Orders = ({orders, getOrdersFunction}) => {
  console.log(orders);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(({uid}) => {
      getOrdersFunction(uid);
    });
  }, []);
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(key, index) => `${key._data.Total}${index}`}
        renderItem={({item}) => <Accordion order={item._data} />}
      />

      <Accordion />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    orders: state.GetOrders,
  };
};
export default connect(mapStateToProps, {getOrdersFunction})(Orders);
