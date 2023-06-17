import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import {avatar, bgprofile} from '../../assets/images';
import {fonts} from '../../services/fonts';

const {width, height} = Dimensions.get('window');

const ProfilePage = props => {
  return (
    <View style={{flex: 1}}>
      <HaederApp title={'Profile'} backable {...props} />
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#D6D6D6',
          paddingBottom: 20,
        }}>
        <ImageBackground
          source={bgprofile}
          style={{
            margin: 15,
            borderRadius: 25,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: width / 2.2,
            marginBottom: 45,
          }}>
          <View>
            <Image
              source={avatar}
              style={{
                width: 150,
                height: 150,
                marginBottom: -45,
                borderRadius: 100,
              }}
            />
          </View>
        </ImageBackground>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            color: '#21B4BD',
            fontSize: fonts.font14,
            textTransform: 'capitalize',
          }}>
          Edir buulolo
        </Text>
      </View>
      <View>
        <View
          style={{
            margin: 15,
            borderBottomWidth: 0.5,
            paddingBottom: 15,
            borderColor: '#8F9BB3',
          }}>
          <Text style={{color: '#8F9BB3'}}>Email</Text>
          <Text style={{color: '#8F9BB3'}}>eldiro@gmail.com</Text>
        </View>

        <View
          style={{
            margin: 15,
            borderBottomWidth: 0.5,
            paddingBottom: 15,
            marginTop: 0,
            borderColor: '#8F9BB3',
          }}>
          <Text style={{color: '#8F9BB3'}}>Phone</Text>
          <Text style={{color: '#8F9BB3'}}>081312344234</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfilePage;
