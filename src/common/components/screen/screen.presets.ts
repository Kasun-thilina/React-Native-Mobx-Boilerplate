import {ViewStyle} from 'react-native';
import {Colors} from '../../theme';

/**
 * All the variations of screens.
 */
export const presets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      backgroundColor: Colors.WHITE,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   */
  scroll: {
    outer: {
      backgroundColor: Colors.WHITE,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {justifyContent: 'flex-start', alignItems: 'stretch'} as ViewStyle,
  },
};

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets;

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset?: ScreenPresets) {
  return !preset || !presets[preset] || preset === 'fixed';
}
