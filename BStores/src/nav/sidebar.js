import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {sideData} from './nav-data';
import {Dimensions, Image, Linking, Text, View} from 'react-native';
import {logos} from '../assets/images';
import Icons from '../components/icons';
import {useRoute} from '@react-navigation/native';
import {fonts} from '../services/fonts';
import DynamicSize from '../services/dynamicSize';

const Drawer = createDrawerNavigator();

const {width, height} = Dimensions.get('window');
function CustomDrawerContent(props) {
  const [menus, setmenus] = React.useState([
    {
      icon: 'home',
      menu: 'Home',
      onPress: () => props.navigation.navigate('Home'),
    },
    {
      icon: 'notifications',
      menu: 'Notification',
      onPress: () => props.navigation.navigate('Notification'),
    },
    {
      icon: 'people',
      menu: 'Book Author',
      onPress: () => props.navigation.navigate('Author'),
    },
    {
      icon: 'folder',
      menu: 'Book Category',
      onPress: () => props.navigation.navigate('Category'),
    },
    {
      icon: 'history',
      menu: 'History',
      onPress: () => props.navigation.navigate('PaymentHistories'),
    },
    {
      icon: 'share',
      menu: 'Share App',
      onPress: () =>
        Linking.openURL(
          'http://play.google.com/store/apps/details?id=<package_name>',
        ),
    },
    {
      icon: 'star',
      menu: 'Rate App',
      onPress: () =>
        Linking.openURL(
          'http://play.google.com/store/apps/details?id=<package_name>',
        ),
    },
  ]);
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexWrap: 'wrap', height: height}}
      {...props}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            backgroundColor: '#90CDF9',
            height: DynamicSize(width / 1.7),
            marginTop: -5,
            padding: DynamicSize(30),
            // width,
          }}>
          <Image
            source={logos}
            style={{
              width: '100%',
              height: '70%',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 4,
            }}>
            <Text style={{fontSize: fonts.font18, color: '#FFFF'}}>
              Book Store App
            </Text>
            <Text
              style={{
                fontSize: fonts.font12,
                textAlign: 'center',
                color: '#FFFF',
                marginTop: 5,
              }}>
              Inspirasi book untuk semua orang
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
          }}>
          {menus.map((item, index) => {
            return (
              <DrawerItem
                icon={() => <Icons name={item.icon} color="#21B4BD" />}
                key={index}
                label={item.menu}
                labelStyle={{color: '#21B4BD'}}
                onPress={item.onPress}
              />
            );
          })}
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 0.95,
            }}>
            <DrawerItem
              style={{backgroundColor: '#21B4BD'}}
              icon={() => <Icons name={'logout'} color="#FFFFFF" />}
              label="Sign Out"
              labelStyle={{
                alignItems: 'center',
                color: '#FFFFFF',
                marginLeft: '25%',
                fontSize: 16,
              }}
              onPress={() => {
                props.navigation.replace('Splash');
                props.navigation.closeDrawer();
              }}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
function Sidebar() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      {sideData.map((x, i) => {
        return <Drawer.Screen key={i} name={x.name} component={x.component} />;
      })}
    </Drawer.Navigator>
  );
}

export default Sidebar;
