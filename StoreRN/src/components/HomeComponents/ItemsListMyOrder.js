import React from 'react';
import {TouchableOpacity, FlatList, Text, Image, View} from 'react-native';
import {Constants} from '../../utils/GeneralApp';
import {ItemStyles, HomeStyles} from '../../utils/GeneralApp';
import {colors} from '../../utils/colors';
import Icon from './Icon';
const ItemsList = ({navigation}) => {
  return (
   <FlatList
    horizontal={false}
    style={ItemStyles.itemList} 
    data={Constants.data}
    keyExtractor={item => item.id}
    renderItem={({item})=>(
        <TouchableOpacity style={ItemStyles.itemMyOrder} onPress={()=>navigation.navigate('Details', item)}>
            <Image source={{uri: item.img}} style={{width: 100, height: 100}} />
            <View style={ItemStyles.textMyOrderContainer}>
                <View style={ItemStyles.titleTrash}>
                    <Text style={ItemStyles.textMyOrder}>{item.name} </Text>
                    <Icon
                    iconName="trash"
                    iconLibrary="FontAwesome5"
                    iconSize={35}
                    iconColor={colors.grayMed}
                    />
                </View>
                <Text style={ItemStyles.textItem}>{'kg'} </Text>
                <Text style={ItemStyles.textItem}>{item.price}</Text>
                <View style={ItemStyles.counterMyOrder}>
                    <Icon
                        iconName="minuscircleo"
                        iconLibrary="AntDesign"
                        iconSize={30}
                        iconColor={colors.gray}
                        // handlePress={()=> count > 0 ?handleCount(count, setCount, '-'): null}
                    />
                    <Text style={HomeStyles.textCounter}>kg</Text>
                    <Icon
                        iconName="pluscircleo"
                        iconLibrary="AntDesign"
                        iconSize={30}
                        iconColor={colors.gray}
                        // handlePress={()=> handleCount(count, setCount, '+')}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )}
   />
  );
};

export default ItemsList
