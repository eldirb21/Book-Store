import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import HaederApp from '../../components/haederApp';
import {Products} from '../../services/products';
import CardBookItem from '../../components/cardBookItem';
const {width, height} = Dimensions.get('window');

const BookList = props => {
  const title = props.route.params?.title || 'Book List';
  const [Items, setItems] = useState([]);

  useEffect(() => {
    if (title === 'Book Popular') {
      setItems(Products.filter(x => !x.isNew));
    } else if (title === 'New Book') {
      setItems(Products.filter(x => x.isNew));
    } else {
      setItems(Products);
    }
  }, [title]);

  const renderItem = ({item, index}) => {
    return (
      <CardBookItem
        key={index}
        item={item}
        widths={'47%'}
        heights={width / 1.5}
        onPress={() => {
          props.navigation.navigate('BookDetail', item);
        }}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <HaederApp title={title ? title : 'Book List'} backable {...props} />
      <FlatList
        numColumns={2}
        columnWrapperStyle={{flexWrap: 'wrap'}}
        data={Items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookList;
