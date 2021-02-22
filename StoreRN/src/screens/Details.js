import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {colors} from '../utils/colors';
import Header from '../components/HomeComponents/Header';
import Bottom from '../components/HomeComponents/Bottom';
import {HomeStyles, Constants} from '../utils/GeneralApp';
import ButtonCart from '../components/HomeComponents/ButtonLarge';
import Icon from '../components/HomeComponents/Icon'

const Details = ({route}) => {
    const item = route.params
    const [count, setCount] = useState(0);

    return (
        <View style={HomeStyles.containerDetail}>
            <Header colorIcons={colors.gray} title={Constants.Details} styleTitle={HomeStyles.homeTitleGray}/>
            <View style={HomeStyles.imageContainerDetail}>
                <View style={HomeStyles.imageShadow}>
                    <Image source={{uri: item.img}} style= {HomeStyles.imageDetail}/>
                </View>
            </View>
            <View style={HomeStyles.textDetail}>
                <Text style={HomeStyles.itemName}>{item.name}</Text>
                <Text style={HomeStyles.itemPrice}>{item.price}</Text>
                <Text style={HomeStyles.textLorem}>{Constants.Lorem}</Text>
                <View style={HomeStyles.counter}>
                    <Icon
                        iconName="minuscircleo"
                        iconLibrary="AntDesign"
                        iconSize={30}
                        iconColor={colors.gray}
                    />
                    <Text style={HomeStyles.textCounter}>{count}kg</Text>
                    <Icon
                        iconName="pluscircleo"
                        iconLibrary="AntDesign"
                        iconSize={30}
                        iconColor={colors.gray}
                    />
                </View>
            </View>
            <ButtonCart buttonTitle={Constants.titleButtonCart}/>
            <Bottom/>
        </View>
    )
}

export default Details