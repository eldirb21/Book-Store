import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import {Products} from '../../services/products';
import CardBookItem from '../../components/cardBookItem';

const {width, height} = Dimensions.get('window');

const TrollyPage = props => {
  const [products, setproducts] = useState(Products);
  const [productCHeckout, setproductCHeckout] = useState([]);

  const renderItem = ({item, index}) => {
    return (
      <CardBookItem
        key={index}
        item={item}
        widths={width / 3.3}
        heights={width / 2.3}
        horizontal
        onPress={() => {}}
        isBuy
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <HaederApp title={'My Trolly'} backable {...props} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btncheckout}
          onPress={() => props.navigation.navigate('Payment', productCHeckout)}>
          <Text style={{color: '#FFFF'}}>Check Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPrice}>
          <Text style={{color: '#F814C5'}}>Rp2.000.000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#90CDF9',
    zIndex: 9999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  btncheckout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#FFFFFF',
  },
  btnPrice: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#FFFFFF',
  },
});

export default TrollyPage;
