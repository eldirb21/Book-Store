import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import HaederApp from '../../components/haederApp';
import CardBookItem from '../../components/cardBookItem';
import {Products} from '../../services/products';

const {width, height} = Dimensions.get('window');

const CategoryDetail = props => {
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
      <HaederApp title={'Novel'} backable {...props} />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 15, marginVertical: 4}}
        columnWrapperStyle={{flexWrap: 'wrap'}}
        data={Products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryDetail;
