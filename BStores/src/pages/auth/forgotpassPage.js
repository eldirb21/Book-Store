import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import {logos} from '../../assets/images';
import {fonts} from '../../services/fonts';
const {height, width} = Dimensions.get('window');

const ForgotpassPage = ({navigation}) => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={'#90CDF9'} barStyle={'dark-content'} />

      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#90CDF9',
            alignItems: 'center',
            width: '100%',
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: fonts.font30,
              marginTop: 10,
              marginBottom: -20,
            }}>
            Login
          </Text>
          <Image
            style={{
              height: width / 2.3,
              width: width / 2,
            }}
            source={logos}
          />
        </View>
        <View
          style={{
            padding: 20,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            height: height / 2,
          }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Phone number"
          />

          <TouchableOpacity
            style={[styles.TextInput, styles.Btn]}
            onPress={() => {
              // navigation.navigate('TabBar');
            }}>
            <Text style={{color: '#FFFFFF'}}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#21B4BD'}}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    width: '100%',
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  Btn: {
    height: 50,
    borderWidth: 0,
    backgroundColor: '#90CDF9',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default ForgotpassPage;
