import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './../Dimensions';
import {colors} from './../colors';

export const ItemStyles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.white,
        width: '100%',
        height: '70%',
        padding: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center'
      },
      itemList: {
          width:'100%',
          height: '10%'
      },
      item:{
        marginHorizontal: 7,
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 7,
        elevation: 3,
        borderColor: colors.ligthGray,
        padding: 10,
        width:'30%',
        // borderRadius: 
      },
      addBtn:{
        padding: 5,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5        
      },
      textBtn: {
          fontSize: 12,
          color: colors.gray,   
      },
      textItem: {
        fontSize: 15,
        color: colors.darkGray,
        marginVertical:2      
    },
    textPrice: {
        fontSize: 16,
        color: colors.gray,
    }
});
