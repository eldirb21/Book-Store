import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import HaederApp from '../../components/haederApp';
import {avatar} from '../../assets/images';
import {fonts} from '../../services/fonts';
import DynamicSize from '../../services/dynamicSize';

const {width, height} = Dimensions.get('window');

const CategoryPage = props => {
  const [Items, setItems] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CategoryDetail', item)}
        activeOpacity={0.8}
        key={index}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          height: width / 2,
          width: DynamicSize(width / 3.36),
          margin: 2,
          borderRadius: 5,

          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 10,
          },
          shadowOpacity: 0.8,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <Image
          style={{
            width: '98%',
            height: '60%',
          }}
          source={avatar}
        />
        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#21B4BD',
              fontSize: fonts.font14,
              textTransform: 'capitalize',
            }}>
            Joe Biden
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HaederApp title={'Category Book'} backable {...props} />
      <FlatList
        numColumns={3}
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 15, marginVertical: 4}}
        columnWrapperStyle={{flexWrap: 'wrap'}}
        data={Items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryPage;
