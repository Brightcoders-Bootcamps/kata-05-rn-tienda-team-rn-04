import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './../Dimensions';
import {colors} from './../colors';

export const DrawerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 20,
  },
  title: {
    color: colors.white,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '37%',
    marginTop: 10,
    marginBottom: 15,
  },
  big: {
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 15,
  },
  iconContainer: {
    width: '20%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
