import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import {Products} from '../../services/products';
import CardBookItem from '../../components/cardBookItem';

const {width, height} = Dimensions.get('window');

const FavoritePage = props => {
  const [favorites] = useState(Products);

  const renderItem = ({item, index}) => {
    return (
      <CardBookItem
        key={index}
        item={item}
        widths={width / 3.3}
        heights={width / 2.3}
        horizontal
        onPress={() => props.navigation.navigate('BookDetail', item)}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <HaederApp
        title={'Favorite'}
        backable
        // rightIcons={['language']}
        // rightPress={[
        //   () => {
        //   },
        // ]}
        {...props}
      />
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavoritePage;
