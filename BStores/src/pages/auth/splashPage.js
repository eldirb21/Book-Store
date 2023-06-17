import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {logos} from '../../assets/images';
const {height, width} = Dimensions.get('window');

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signin');
    }, 500);
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar backgroundColor={'#FFFF'} barStyle={'dark-content'} />

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('Signin')}>
        <Image
          style={{
            height: width / 2.3,
            width: width,
          }}
          source={logos}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashPage;
