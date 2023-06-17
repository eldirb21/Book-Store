import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icons from './icons';
import {fonts} from '../services/fonts';

const CardBookItem = ({
  item,
  widths,
  heights,
  horizontal,
  isBuy,
  qty = 0,
  onPlus,
  onMinus,
  onPress,
}) => {
  return (
    <>
      {horizontal ? (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={styles.hzCard}>
          <View>
            <Image
              resizeMode="contain"
              style={{
                width: widths,
                height: heights,
                ...styles.hzImage,
              }}
              source={item.image}
            />
          </View>

          <View style={styles.hzContent}>
            <Text style={styles.hzName}>{item.name}</Text>
            <Text style={styles.hzdesc}>{item.desc}</Text>
            <View style={styles.mt}>
              {isBuy ? (
                <View style={styles.hzcounter}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPlus}
                    style={styles.hzPlus}>
                    <Icons name="add" color="#FFFFFF" />
                  </TouchableOpacity>
                  <View style={styles.hzPriceContent}>
                    <Text style={styles.hzqyt}>{qty}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={onMinus}
                    activeOpacity={0.8}
                    style={styles.hzPlus}>
                    <Icons name="remove" color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              ) : (
                <Text style={styles.hzNotes}>Lorem Ipsu dolor</Text>
              )}
            </View>
          </View>
          <View style={styles.hzPriceContent}>
            <View style={styles.hzPrice}>
              <Text style={styles.hzPriceText}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={{
            width: widths,
            height: heights,
            ...styles.card,
          }}>
          <View>
            <View style={styles.price}>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={item.image}
            />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 10,
  },
  price: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: '#21B4BD',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 4,
    opacity: 0.78,
  },
  priceText: {
    color: '#FFF',
    fontSize: fonts.font11,
  },
  image: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
    marginBottom: 2,
  },
  name: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#21B4BD',
    fontSize: fonts.font14,
  },
  hzCard: {
    backgroundColor: '#E1E8E9',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  hzImage: {
    borderRadius: 10,
  },
  hzContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  hzName: {
    color: '#21B4BD',
    fontSize: fonts.font16,
    textTransform: 'capitalize',
    fontWeight: '600',
    marginBottom: 10,
  },
  hzdesc: {
    color: '#8F9BB3',
  },

  hzNotes: {
    color: '#000000',
  },
  hzPriceContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  hzPrice: {
    borderTopLeftRadius: 20,
    backgroundColor: '#21B4BD',
    borderBottomRightRadius: 20,
    padding: 8,
    width: '100%',
  },
  hzPriceText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: fonts.font16,
  },
  hzcounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  hzPlus: {
    backgroundColor: '#CAD1D1',
    borderRadius: 100,
    padding: 3,
  },
  hzqyt: {
    color: '#21B4BD',
    fontSize: fonts.font16,
  },
  mt: {
    marginTop: 20,
  },
});

export default CardBookItem;
