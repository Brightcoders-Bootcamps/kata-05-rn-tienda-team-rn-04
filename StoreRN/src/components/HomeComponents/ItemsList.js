import React from 'react';
import {TouchableOpacity, FlatList, Text} from 'react-native';
import {Constants} from '../../utils/GeneralApp'

const ItemsList = () => {
  return (
   <FlatList 
    data={Constants.data}
    keyExtractor={item => item.id}
    renderItem={({item})=>(
        <TouchableOpacity>
           <Text>{item.name} </Text>
        </TouchableOpacity>
    )}
   />
  );
};

export default ItemsList
