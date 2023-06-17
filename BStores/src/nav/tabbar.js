import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabData} from './nav-data';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from '../components/icons';
import {fonts} from '../services/fonts';

const Tab = createBottomTabNavigator();
function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName;
        let labelName;

        if (label === 'Home') {
          iconName = isFocused ? 'home' : 'dashboard';
          labelName = isFocused ? 'Home' : 'Dashboard';
        } else if (label === 'Favorite') {
          iconName = isFocused ? 'favorite' : 'favorite';
          labelName = isFocused ? 'Favorite' : 'Favorite';
        } else if (label === 'Trolly') {
          iconName = isFocused ? 'add-shopping-cart' : 'shopping-cart';
          labelName = isFocused ? 'Shopping' : 'Shopping';
        } else if (label === 'Profile') {
          iconName = isFocused ? 'person' : 'person';
          labelName = isFocused ? 'Profile' : 'Profile';
        }

        let colors = isFocused ? '#21B4BD' : '#222';
        let bgColor = isFocused ? 'hsl(183, 83%, 96%)' : '#FFF';

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              backgroundColor: bgColor,
              ...styles.btnTab,
            }}>
            <Icons name={iconName} color={colors} size={25} />
            <Text style={{color: colors, ...styles.font}}>{labelName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function TabBar() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {tabData.map((x, i) => (
        <Tab.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Tab.Navigator>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnTab: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  font: {
    fontSize: fonts.font14,
    fontWeight: '400',
  },
});
