import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const guidelineBaseWidth = width;

const DynamicSize = size => {
  let scale = (width / guidelineBaseWidth) * size;
  let dynamicCalculation = width / scale;
  let result = width / dynamicCalculation;
  return result;
};

export default DynamicSize;
