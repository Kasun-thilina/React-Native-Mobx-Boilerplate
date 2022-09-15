import {StyleSheet} from 'react-native';
import {screenMetrics} from '../../../common/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenMetrics.screenWidth,
  },
  coverImage: {
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
