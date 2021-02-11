import {StyleSheet} from 'react-native';
import {windowHeight} from '../Dimensions';
export const styles = StyleSheet.create({
  btnContainer: {
    width: '75%',
    height: windowHeight / 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#2ec4b6',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
