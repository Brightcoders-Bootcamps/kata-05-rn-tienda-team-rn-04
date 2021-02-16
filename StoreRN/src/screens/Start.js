import React from 'react';
import {View, ImageBackground, Text, Image} from 'react-native';
import {styles, ConstantLogIn} from '../utils/Auth';
import ButtonStart from '../components/AuthComponents/ButtonLarge';

const Start =  ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground source={require ('../utils/Images/supermarket.jpeg')} style={styles.Background}></ImageBackground> 
            </View>
            <View style={styles.containerLetsShop}>
                <View style={styles.titleLogo}>
                    <Text style={styles.titleStart}>{ConstantLogIn.titleStar}</Text>
                    <View style={styles.containerLogo}>
                        <Image  source={require('../utils/Images/store.png')} style={styles.imageStart}/>
                    </View>
                </View>
                <ButtonStart 
                    buttonTitle={ConstantLogIn.letsShop}
                    navigation={navigation}
                    RouteGo={ConstantLogIn.routeStart}
                />
            </View>
        </View>
    );
};

export default Start;
