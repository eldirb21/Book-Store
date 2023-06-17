import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const Icons = ({type, size = 22, ...props}) => {
  switch (type) {
    case 'AntDesign':
      return <AntDesign size={size} {...props} />;

    case 'Feather':
      return <Feather size={size} {...props} />;

    case 'Entypo':
      return <Entypo size={size} {...props} />;

    case 'FontAwesome':
      return <FontAwesome size={size} {...props} />;

    case 'FontAwesome5Brands':
    case 'FontAwesome5':
      return <FontAwesome5 size={size} {...props} />;

    case 'fontawesome5pro':
      return <FontAwesome5Pro size={size} {...props} />;

    case 'Fontisto':
      return <Fontisto size={size} {...props} />;

    case 'EvilIcons':
      return <EvilIcons size={size} {...props} />;

    case 'Foundation':
      return <Foundation size={size} {...props} />;

    case 'Octicons':
      return <Octicons size={size} {...props} />;

    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons size={size} {...props} />;

    case 'Ionicons':
      return <Ionicons size={size} {...props} />;

    case 'SimpleLineIcons':
      return <SimpleLineIcons size={size} {...props} />;

    case 'Zocial':
      return <Zocial size={size} {...props} />;
  }
  return <MaterialIcons size={size} {...props} />;
};

export default Icons;
