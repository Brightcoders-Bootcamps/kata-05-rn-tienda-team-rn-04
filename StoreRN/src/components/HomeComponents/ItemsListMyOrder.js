import React from 'react';
import {FlatList, Text, Image, View} from 'react-native';
import {ItemStyles, HomeStyles} from '../../utils/GeneralApp';
import {colors} from '../../utils/colors';
import {Constants} from '../../utils/GeneralApp';
import DeleteIcon from './DeleteIcon';
import Icon from './Icon';
import {connect} from 'react-redux';
import {delete_product} from '../../../redux/actions/ProductsActions';
import * as Animatable from 'react-native-animatable';
import {productsSelector} from '../../utils/selectors';
const ItemsList = ({Products, delete_product}) => {
  if (Products.length === 0) {
    return (
      <View style={{paddingTop: 120}}>
        <Animatable.Text
          style={HomeStyles.noOrdersText}
          animation="slideInDown"
          iterationCount={20}
          direction="alternate-reverse">
          {Constants.noOrders}
        </Animatable.Text>
      </View>
    );
  }
  return (
    <FlatList
      horizontal={false}
      style={ItemStyles.itemList}
      data={Products}
      keyExtractor={(item, index) => `${index}${item.id}${item.name}`}
      renderItem={({item}) => (
        <View style={ItemStyles.itemMyOrder}>
          <Image source={{uri: item.img}} style={{width: 100, height: 100}} />
          <View style={ItemStyles.textMyOrderContainer}>
            <View style={ItemStyles.titleTrash}>
              <Text style={ItemStyles.textMyOrder}>{item.name} </Text>

              <DeleteIcon
                iconName="trash"
                iconLibrary="FontAwesome5"
                iconSize={35}
                iconColor={colors.grayMed}
                handlePress={() => delete_product(item.id)}
              />
            </View>
            <Text style={ItemStyles.textItem}>{'1 kg'} </Text>
            <Text style={ItemStyles.textItem}>{item.price}</Text>
            <View style={ItemStyles.counterMyOrder}>
              <Icon
                iconName="minuscircleo"
                iconLibrary="AntDesign"
                iconSize={30}
                iconColor={colors.gray}
              />
              <Text style={HomeStyles.textCounter}>1 kg</Text>
              <Icon
                iconName="pluscircleo"
                iconLibrary="AntDesign"
                iconSize={30}
                iconColor={colors.gray}
              />
            </View>
          </View>
        </View>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    Products: productsSelector(state),
  };
};
const mapDispatchToProps = {
  delete_product,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
