import React from 'react';
import {TouchableOpacity, FlatList, Text, Image, View} from 'react-native';
import {Constants} from '../../utils/GeneralApp'
import {ItemStyles} from '../../utils/GeneralApp'
const ItemsList = ({navigation}) => {
  return (
   <FlatList
    numColumns={3}
    horizontal={false}
    style={ItemStyles.itemList} 
    data={Constants.data}
    keyExtractor={item => item.id}
    renderItem={({item})=>(
        <TouchableOpacity style={ItemStyles.item} onPress={()=>navigation.navigate('Details', item)}>
            <Image source={{uri: item.img}} style={{width: 60, height: 60}} />
            <Text style={ItemStyles.textItem}>{item.name} </Text>
            <Text style={ItemStyles.textItem}>{item.price}</Text>
            <TouchableOpacity style={ItemStyles.addBtn}>
                <Text style={ItemStyles.textBtn}>{Constants.AddToCart}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )}
   />
  );
};

export default ItemsList
