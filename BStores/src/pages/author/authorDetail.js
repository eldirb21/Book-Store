import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import {Products} from '../../services/products';
import CardBookItem from '../../components/cardBookItem';
import {avatar, bgprofile} from '../../assets/images';
import {fonts} from '../../services/fonts';

const {width, height} = Dimensions.get('window');

const AuthorDetail = props => {
  const data = props.route.params;

  return (
    <View style={{flex: 1}}>
      <HaederApp title={'Author Name'} backable {...props} />
      <ScrollView>
        <View
          style={{
            marginBottom: 70,
          }}>
          <ImageBackground
            source={bgprofile}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
              paddingVertical: 10,

              height: width / 2.5,
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: -80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={avatar}
                style={{
                  width: width / 2.5,
                  height: width / 2.5,
                }}
              />
              <Text
                style={{
                  marginTop: 3,
                  fontSize: fonts.font16,
                  textTransform: 'capitalize',
                  color: '#21B4BD',
                }}>
                {'Jhon DUe'}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          {Products.map((item, index) => {
            return (
              <CardBookItem
                horizontal
                key={index}
                item={item}
                widths={width / 3}
                heights={width / 2}
                onPress={() => {
                  props.navigation.navigate('BookDetail', item);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AuthorDetail;
