import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './../Dimensions';
import {colors} from './../colors';

export const styles = StyleSheet.create({
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
  headerContainer: {
    width: '100%',
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  itemContainer: {
    backgroundColor: colors.white,
    width: '100%',
    height: '70%',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
  bottomIcons: {
    color: colors.gray,
    fontSize: 30,
  },
});
