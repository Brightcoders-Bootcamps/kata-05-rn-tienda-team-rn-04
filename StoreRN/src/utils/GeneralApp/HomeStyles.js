import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './../Dimensions';
import {colors} from './../colors';

export const HomeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.green,
  },
  homeBackground: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    resizeMode: 'cover',
    opacity: 0.3,
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
  },
  homeTitleGray: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.gray,
  },
  containerDetail:{
    width: windowWidth,
    height: windowHeight
  },
  headerContainer: {
    width: '100%',
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  bottomIconsContainer: {
    backgroundColor: colors.white,
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft:'15%',
    alignItems:'center',
  },
  textCounter:{
    marginHorizontal:20,
    color: colors.gray,
    fontSize:14,
  },
  imageDetail:{
    width:'80%',
    height:150,
    borderRadius:10,
    backgroundColor:'transparent'
  },
  imageContainerDetail:{
    justifyContent: 'center',
    alignItems:'center',
    height:'28%'
  },
  imageShadow:{
    width:'80%',
    height:'90%',
    justifyContent:'center',
    alignItems:'center',
    elevation: 7,
    borderColor: colors.ligthGray,
    borderRadius:10,
    backgroundColor: 'transparent',
  },
  itemName:{
    color:colors.darkGray,
    fontSize:16,
    marginLeft:'10%'
  },
  itemPrice:{
    color:colors.gray,
    fontSize:14,
    marginBottom: 20,
    marginLeft:'10%'
  },
  textDetail:{
    height:'35%',
  },
  textLorem:{
    color:colors.gray,
    fontSize:12,
    marginHorizontal:'10%',
    textAlign:'justify',
    marginBottom: 30
  },

});
