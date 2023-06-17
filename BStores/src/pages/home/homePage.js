import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import {banner1} from '../../assets/images';
import Icons from '../../components/icons';
import {Products} from '../../services/products';
import CardBookItem from '../../components/cardBookItem';
import SearchPage from '../search/searchPage';
import {fonts} from '../../services/fonts';

const {width, height} = Dimensions.get('window');
const SessionHead = ({title, more = 'More', onMore}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 10,
      }}>
      <Text style={{color: '#21B4BD', fontSize: fonts.font14}}>{title}</Text>
      <TouchableOpacity
        onPress={onMore}
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{marginRight: 10, color: '#F814C5'}}>{more}</Text>
        <Icons name="arrow-forward-ios" size={18} color="#F814C5" />
      </TouchableOpacity>
    </View>
  );
};
const HomePage = props => {
  const [populars] = useState(Products.filter(x => !x.isNew));
  const [newproduct] = useState(Products.filter(x => x.isNew));
  const [isSearch, setisSearch] = useState(false);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SearchPage
        visible={isSearch}
        onBack={() => setisSearch(!isSearch)}
        {...props}
      />
      <View style={{flex: 1}}>
        <HaederApp
          title={'Book Store'}
          isToggleDrawer
          rightIcons={['notifications', 'search']}
          rightPress={[
            () => props.navigation.navigate('Notification'),
            () => setisSearch(!isSearch),
          ]}
          {...props}
        />
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              padding: 15,
              paddingBottom: 5,
            }}>
            <Image
              source={banner1}
              style={{
                borderRadius: 10,
                height: 170,
                width: '100%',
              }}
            />
          </View>
          <View>
            <SessionHead
              title={'Book Popular'}
              onMore={() =>
                props.navigation.navigate('BookList', {title: 'Book Popular'})
              }
            />
            <ScrollView
              style={{marginLeft: 10}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {populars.map((item, i) => {
                return (
                  <CardBookItem
                    key={i}
                    item={item}
                    widths={width / 3}
                    heights={width / 2}
                    onPress={() => {
                      props.navigation.navigate('BookDetail', item);
                    }}
                  />
                );
              })}
            </ScrollView>
          </View>
          <SessionHead
            title={'New Book'}
            onMore={() =>
              props.navigation.navigate('BookList', {title: 'New Book'})
            }
          />
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              paddingHorizontal: 15,
              flex: 1,
              width: '100%',
            }}>
            {newproduct.map((item, i) => {
              return (
                <CardBookItem
                  key={i}
                  item={item}
                  widths={'47%'}
                  heights={width / 1.5}
                  onPress={() => {
                    props.navigation.navigate('BookDetail', item);
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
