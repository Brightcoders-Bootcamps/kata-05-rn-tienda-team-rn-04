import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './../Dimensions';
import {colors} from './../colors';

export const ItemStyles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.white,
        width: '100%',
        height: '70%',
        padding: 15,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center'
      },
      itemList: {
          width:'100%',
          height: '10%',
      },
      item:{
        marginHorizontal: 7,
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 7,
        borderColor: colors.grayMed,
        borderWidth: 1,
        padding: 10,
        width:'30%',
        borderRadius: 5,
        
      },
      itemMyOrder:{
        justifyContent:'flex-start',
        marginVertical: 7,
        borderColor: colors.grayMed,
        padding: 15,
        width:'100%',
        borderRadius: 5,
        flexDirection:'row',
        borderBottomColor: colors.grayMed,
        borderBottomWidth: 1
      },
      textMyOrderContainer: {
        justifyContent: 'flex-start',
        marginLeft: 10,
        width: '68%'
      },
      textMyOrder: {
        fontWeight: 'bold',
        color: colors.gray,
        fontSize: 17
      },
      counterMyOrder:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft:'15%',
        alignItems:'center',
      },
      titleTrash:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }, 
      addBtn:{
        padding: 5,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5        
      },
      checkOutBtn:{
        padding: 5,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,     
      },
      textBtn: {
          fontSize: 12,
          color: colors.gray, 
          fontWeight: 'bold'  
      },
      textBtnCheckout: {
        fontSize: 12,
        color: colors.white, 
        fontWeight: 'bold'  
    },
      textItem: {
        fontSize: 15,
        color: colors.darkGray,
        marginVertical:2      
    },
    textPrice: {
        fontSize: 16,
        color: colors.gray,
    },
});
