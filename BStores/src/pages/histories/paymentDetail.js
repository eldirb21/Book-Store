import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import HaederApp from '../../components/haederApp';
import Icons from '../../components/icons';
import {fonts} from '../../services/fonts';

const PaymentDetail = props => {
  return (
    <View style={{flex: 1}}>
      <HaederApp title={'Payment Detail'} backable {...props} />
      <View style={{flex: 1, backgroundColor: '#E9E9E9'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F7F7F7',
          }}>
          <View>
            <View>
              <Text>Transaction Date</Text>
              <Text>12 Jun 2023 08:08 WIB</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text>No. Invoice</Text>
              <Text>341421243423423</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text>Status</Text>
            <Text style={{color: '#16B611'}}>Transaction Success</Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 8,
            paddingTop: 20,
            backgroundColor: '#FFF',
            flex: 1,
          }}>
          <Text
            style={{color: '#000', fontSize: fonts.font16, fontWeight: '600'}}>
            Detail Payment
          </Text>
          <View style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                justifyContent: 'space-between',
              }}>
              <Text>Payment Methods</Text>
              <Text>Virtual BCA</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                justifyContent: 'space-between',
              }}>
              <Text>Category Book</Text>
              <Text>Novel</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                justifyContent: 'space-between',
              }}>
              <Text>Price</Text>
              <Text>Rp50.000</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                justifyContent: 'space-between',
              }}>
              <Text>Discount</Text>
              <Text>Rp5.000</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 15,
          borderTopWidth: 1,
          borderColor: 'hsl(183, 0%, 78%)',
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingBottom: 15,
          }}>
          <Text style={{fontSize: fonts.font16, color: '#000000'}}>Total</Text>
          <Text style={{fontSize: fonts.font16, color: 'red'}}>Rp14.000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#C7C7C7',
              padding: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}>
            <Icons name="more-horiz" color="#000" />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: '#21B4BD',
              flex: 1,
              marginLeft: 20,
              padding: 13,
              paddingHorizontal: 15,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFFFFF'}}>Print Struk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentDetail;
