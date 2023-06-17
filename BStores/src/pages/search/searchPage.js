import React, {useState} from 'react';
import {View, StyleSheet, Modal, FlatList, Dimensions} from 'react-native';
import HaederApp from '../../components/haederApp';
import {Products} from '../../services/products';
import CardBookItem from '../../components/cardBookItem';

const {width, height} = Dimensions.get('window');

const SearchPage = props => {
  const {visible = false, onBack = () => {}} = props;
  const [Items, setItems] = useState(Products);
  const [search, setsearch] = useState('');

  const onSearch = () => {};
  const onSearchText = value => {
    setsearch(value);
    if (value === '') setItems(Products);
    else if (value.length > 2) {
      let data = [...Products];
      let dataSearch = data.filter(x =>
        x.name.toUpperCase().includes(value.toUpperCase()),
      );
      setItems(dataSearch);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <CardBookItem
        key={index}
        item={item}
        widths={width / 3.3}
        heights={width / 2.3}
        horizontal
        onPress={() => {
          props.navigation.navigate('BookDetail', item);
          onBack();
        }}
      />
    );
  };
  return (
    <Modal transparent visible={visible}>
      <View style={styles.contentSearch}>
        <HaederApp
          onBack={onBack}
          onSearchText={onSearchText}
          onSearch={onSearch}
          search={search}
          isSearch
          {...props}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentSearch: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
});

export default SearchPage;
