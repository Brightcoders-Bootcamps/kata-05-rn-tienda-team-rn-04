import React from 'react';
import {TouchableOpacity, FlatList, Text, Image, View} from 'react-native';
import {Constants} from '../../utils/GeneralApp';
import {ItemStyles, HomeStyles} from '../../utils/GeneralApp';
import {colors} from '../../utils/colors';
import Icon from './Icon';
import {connect} from 'react-redux';
import {delete_product} from '../../../redux/actions/ProductsActions';

const ItemsList = ({navigation, Products, delete_product}) => {
    if(Products.length === 0){
        return <Text>No Orders yet</Text>
    }
    return ( <FlatList
        horizontal={false}
        style={ItemStyles.itemList} 
        data={Products}
        keyExtractor={(item, index) => `${index}${item.id}${item.name}`}
        renderItem={({item})=>(
            <TouchableOpacity style={ItemStyles.itemMyOrder} onPress={()=>navigation.navigate('Details', item)}>
                <Image source={{uri: item.img}} style={{width: 100, height: 100}} />
                <View style={ItemStyles.textMyOrderContainer}>
                    <View style={ItemStyles.titleTrash}>
                        <Text style={ItemStyles.textMyOrder}>{item.name} </Text>
                        <TouchableOpacity onPress={() => console.log('cool')}>
                            <Icon
                                iconName="trash"
                                iconLibrary="FontAwesome5"
                                iconSize={35}
                                iconColor={colors.grayMed}
                            />   
                        </TouchableOpacity>
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
            </TouchableOpacity>
        )}
       />)
  

  
};
const productsSelector = state => state.Products
const mapStateToProps = state =>  {
    return {
        Products: productsSelector(state)
    }
}
const mapDispatchToProps = {
    delete_product
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
