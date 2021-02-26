import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {HomeStyles, ItemStyles, Constants} from './../utils/GeneralApp';
import {colors} from '../utils/colors';
import ItemList from '../components/HomeComponents/ItemsListMyOrder';
import Header from '../components/HomeComponents/Header';
import Bottom from '../components/HomeComponents/Bottom';
import {connect} from 'react-redux';
import {productsSelector} from '../utils/selectors';
import {createOrderFunction} from '../../redux/actions/OrdersActions';
import {useCreateOrder, usePrevious} from '../hooks';
const MyOrder = ({navigation, Products, createOrderFunction}) => {
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setOrder(useCreateOrder(Products));
  }, [Products]);

  const PreviousOrder = usePrevious(order);

  useEffect(() => {
    if (PreviousOrder?.Total !== order?.Total) {
      setTotal(order.Total);
    }
  }, [order]);

  return (
    <View style={HomeStyles.homeContainer}>
      <View>
        <ImageBackground
          source={require('./../utils/Images/supermarket.jpeg')}
          style={HomeStyles.homeBackground}></ImageBackground>
        <Header
          colorIcons={colors.white}
          title={Constants.titleMyOrder}
          styleTitle={HomeStyles.homeTitle}
          navigation={navigation}
        />
        <View style={HomeStyles.containerSubtotal}>
          <Text style={HomeStyles.textSubtotal}>SubTotal = {total}$</Text>
          <TouchableOpacity
            style={ItemStyles.checkOutBtn}
            onPress={() => {
              createOrderFunction(order);
              //navigation.navigate('OrderPlaced');
            }}>
            <Text style={ItemStyles.textBtnCheckout}>
              {Constants.checkOutTitle}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ItemStyles.itemContainerOrder}>
          <ItemList navigation={navigation} />
        </View>
        <Bottom />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    Products: productsSelector(state),
  };
};

const mapDispatchToProps = {
  createOrderFunction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
