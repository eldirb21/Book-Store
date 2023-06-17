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
import {amilllion, avatar} from '../../assets/images';
import Icons from '../../components/icons';
import {fonts} from '../../services/fonts';

const {width, height} = Dimensions.get('window');

const NotificationPage = props => {
  const [Items, setItems] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('BookList')}
        activeOpacity={0.8}
        key={index}
        style={{
          backgroundColor: index === 0 ? 'hsl(183, 83%, 90%)' : '#FFF',
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
            <Icons
              name="brightness-percent"
              type="MaterialCommunityIcons"
              color="hsl(183, 83%, 54%)"
            />
            <View style={{marginLeft: 10}}>
              <Text style={{color: '#000000'}}>Promo</Text>
              {/* <Text>16 Jun 2023</Text> */}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>16 Jun 2023</Text>
            {/* <TouchableOpacity
              style={{
                backgroundColor: 'hsl(183, 83%, 94%)',
                borderRadius: 5,
                padding: 6,
                marginRight: 6,
              }}>
              <Text style={{color: '#21B4BD', fontSize: 12}}>Berhasil</Text>
            </TouchableOpacity>
            <Icons name="more-vert" color="#000000" /> */}
          </View>
        </View>

        {/* <View
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
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: fonts.font12,
                fontWeight: '600',
              }}>
              Novel author by joko widodo
            </Text>
            <Text style={{color: '#000000'}}>
              Discount menarik untuk semua buku ciptaan bapak jokowi dodo
            </Text>
          </View>
          {/* <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#21B4BD',
                borderRadius: 5,
                padding: 6,
                width: '100%',
              }}>
              <Text style={{color: '#FFF', fontSize: 12}}>Print Struk</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <HaederApp title={'Notification'} backable {...props} />
      <FlatList
        // numColumns={3}
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 15, marginVertical: 4}}
        data={Items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NotificationPage;
