import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '../../Themes'
import {create} from '../../Lib/PlatformStyleSheet'

export default create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    // paddingHorizontal: Metrics.baseMargin,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  leftButton: {
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  logo: {
    height: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    width: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    resizeMode: 'contain'
  },
  rightButton: {
    paddingHorizontal: 15,
    paddingVertical: 3,
  }
})
