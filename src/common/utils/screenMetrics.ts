import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const screenMetrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export function getScaledHeight(size: number) {
  var ratio = height < 600 ? 0.5 : 1;
  return size != null ? (size / 100) * height * ratio : 0;
}

export function getScaledWidth(size: number) {
  var ratio = width < 600 ? 0.5 : 1;
  return size != null ? (size / 100) * width : 0;
}
