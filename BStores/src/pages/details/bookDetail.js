import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import HaederApp from '../../components/haederApp';
import {fonts} from '../../services/fonts';

const {width, height} = Dimensions.get('window');

const BookDetail = props => {
  const Items = props.route.params;
  return (
    <View style={{flex: 1}}>
      <HaederApp title={Items.name} backable {...props} />
      <View style={{flex: 1, margin: 15}}>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: height / 3.5,
            }}
            source={Items.image}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
          }}>
          <Text style={styles.title}>{Items.name}</Text>
          <Text style={styles.desc}>{Items.desc}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fonts.font16,
    color: '#21B4BD',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default BookDetail;
