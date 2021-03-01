import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {colors} from '../utils/colors';
import Header from '../components/HomeComponents/Header';
import Bottom from '../components/HomeComponents/Bottom';
import {HomeStyles, Constants} from '../utils/GeneralApp';
import ButtonCart from '../components/HomeComponents/ButtonLarge';
import Icon from '../components/HomeComponents/IconCounter';
import {handleCount} from '../utils/functions';
import {add_product} from "../../redux/actions/ProductsActions";
import {connect} from 'react-redux';

const Details = ({route, navigation, add_product}) => {
    const item = route.params
    const [count, setCount] = useState(0);
    return (
        <View style={HomeStyles.containerDetail}>
            <Header colorIcons={colors.gray} title={Constants.Details} styleTitle={HomeStyles.homeTitleGray} navigation={navigation} />
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
                        handlePress={()=> count > 0 ?handleCount(count, setCount, '-'): null}
                    />
                    <Text style={HomeStyles.textCounter}>{count}kg</Text>
                    <Icon
                        iconName="pluscircleo"
                        iconLibrary="AntDesign"
                        iconSize={30}
                        iconColor={colors.gray}
                        handlePress={()=> handleCount(count, setCount, '+')}
                    />
                </View>
            </View>
            <ButtonCart  buttonTitle={Constants.titleButtonCart} RouteGo={'Home'} navigation={navigation} item={item} add_product={add_product} count={count} />
            <Bottom/>
        </View>
    )
};

const mapDispatchToProps = {
    add_product
}

export default connect(null, mapDispatchToProps)(Details);