import {Dimensions, StyleSheet} from 'react-native';
import {windowHeight} from '../Dimensions';
import { colors } from "../colors";

export const styles = StyleSheet.create({
  btnContainer: {
    width: '88%',
    height: windowHeight / 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.lightGreen,
    marginBottom: 30,
    flexDirection: 'row'
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase'
  },
  btnLargeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
  btnLargeDetailText: {
    fontSize: 16,
    color: colors.white,
  },
  container: {
   flex:1,
   backgroundColor: colors.green
  },
  textBottom: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.white,
    marginTop:'13%'
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: colors.gray,
    marginTop: '25%',
  },
  input: {
    width: '88%',
    height: windowHeight / 12,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    shadowColor: colors.ligthGray,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 15,
  },
  containerAccount:{
    backgroundColor: colors.white,
    width: '100%',
    height:'85%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    position: 'relative'
  },
  Background:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, 
    position: 'absolute', 
    resizeMode: 'cover', 
    opacity: 0.3,
  },
  containerMessage:{
    width:'100%',
    alignItems:'center'
  },
  containerInputs:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput:{
    marginStart: 10,
  },
  textForgotPass:{
    color:colors.gray
  },
  btnLargeContainer:{
    backgroundColor: colors.lightGreen,
    width: '100%',
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  btnLargeDetailContainer:{
    backgroundColor: colors.lightGreen,
    width: '100%',
    height: 50,
    justifyContent:'center',
    alignItems:'center'
  },
  containerLetsShop:{
    width: '100%',
    height: '100%',
    justifyContent:'space-around',
    alignItems:'center'
  },
  titleStart:{
    color: colors.white,
    fontSize:45,
    fontFamily: 'Courgette-Regular',
  },
  containerLogo:{
    backgroundColor: colors.white,
    borderRadius:100,
    width: 120,
    height:120,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 30
  },
  imageStart:{
    width:115,
    height:115
  },
  titleLogo:{
    justifyContent:'center',
    alignItems: 'center'
  },
});
