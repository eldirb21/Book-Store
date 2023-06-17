import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import Icons from '../../components/icons';
import {amilllion} from '../../assets/images';
import {fonts} from '../../services/fonts';

const PaymentHistories = props => {
  const Transactions = [1, 2, 2, 2, 3, 3, 3, 2, 2, 1, 2];
  return (
    <View style={{flex: 1}}>
      <HaederApp title={'Payment History'} backable {...props} />
      <ScrollView>
        {Transactions.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PaymentDetail')}
              activeOpacity={0.8}
              key={index}
              style={{
                backgroundColor: '#FFF',
                margin: 10,
                padding: 10,
                borderRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: 'hsl(183, 83%, 94%)',
                  marginBottom: 5,
                  paddingBottom: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icons name="shopping-cart" color="hsl(183, 83%, 54%)" />
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: '#000000'}}>Belanja</Text>
                    <Text>16 Jun 2023</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'hsl(183, 83%, 94%)',
                      borderRadius: 5,
                      padding: 6,
                      marginRight: 6,
                    }}>
                    <Text style={{color: '#21B4BD', fontSize: fonts.font12}}>
                      Berhasil
                    </Text>
                  </TouchableOpacity>
                  <Icons name="more-vert" color="#000000" />
                </View>
              </View>

              <View
                style={{
                  marginVertical: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  source={amilllion}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 6,
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text>Harry Poter</Text>
                  <Text>16 Jun 2023</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text>Total Price</Text>
                  <Text style={{color: '#000000'}}>Rp50.000</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#21B4BD',
                      borderRadius: 5,
                      padding: 6,
                      width: '100%',
                    }}>
                    <Text style={{color: '#FFF', fontSize: fonts.font12}}>
                      Print Struk
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentHistories;
