import {StyleSheet} from 'react-native';
import {windowHeight} from '../Dimensions';
import { colors } from "../colors";

export const styles = StyleSheet.create({
  btnContainer: {
    width: '88%',
    height: windowHeight / 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: colors.lightGreen,
    marginBottom: 20
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase'
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50%',
    marginTop: 150
  },
  textBottom: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.lightGreen
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: colors.lightGrey
  },
  input: {
    width: '88%',
    height: windowHeight / 12,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  
});






