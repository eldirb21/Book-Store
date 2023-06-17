import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import Icons from '../../components/icons';
import {bgprofile, logos} from '../../assets/images';
import {fonts} from '../../services/fonts';

const PaymentPage = props => {
  const [data, setdata] = useState([
    {
      bankName: 'Bank Mandiri',
      logo: '',
      desc: 'Tap to pay with Bank Mandiri',
      isSelect: false,
    },
    {
      bankName: 'Bank BCA',
      logo: '',
      desc: 'Tap to pay with Bank BCA',
      isSelect: false,
    },
    {
      bankName: 'Bank BRI',
      logo: '',
      desc: 'Tap to pay with Bank BRI',
      isSelect: false,
    },
  ]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        key={index}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 15,
          marginBottom: 10,
          backgroundColor: '#CAD1D1',
          borderRadius: 6,
          padding: 15,
        }}>
        <View>
          <Image
            style={{
              height: 70,
              width: 130,
              borderRadius: 10,
            }}
            source={bgprofile}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={{color: '#055E7C', fontSize: fonts.font20}}>
            {item.bankName}
          </Text>
          <Text style={{color: '#8F9BB3', fontSize: fonts.font12}}>
            {item.desc}
          </Text>
        </View>
        <View>
          <Icons name="arrow-forward-ios" color="#8F9BB3" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HaederApp title={'PAYMENT METHODS'} backable {...props} />
      <View
        style={{
          margin: 15,
        }}>
        <Text style={{color: '#000000', fontSize: fonts.font15}}>
          SELECT PAYMENT METHOD
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentPage;
