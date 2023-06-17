import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import Icons from './icons';
import {fonts} from '../services/fonts';

const HaederApp = ({
  title,
  backable = false,
  isToggleDrawer = false,
  onBack,
  onSearch,
  isSearch,
  search,
  onSearchText,
  onPressRignt,
  rightIcons = [],
  rightPress = [() => {}, () => {}],
  ...props
}) => {
  const onLeftPress = () => {
    if (backable) {
      props.navigation.goBack();
    } else if (isToggleDrawer) {
      props.navigation.toggleDrawer();
    } else {
      onBack();
    }
  };
  const renderLeft = () => (
    <TouchableOpacity style={styles.items} onPress={onLeftPress}>
      {backable || isSearch ? (
        <Icons name={'arrow-back-ios'} color="#21B4BD" size={22} />
      ) : (
        <Icons name={'sliders'} type={'FontAwesome'} color="#21B4BD" />
      )}
    </TouchableOpacity>
  );
  const renderRight = () => (
    <View style={styles.itemRight}>
      <TouchableOpacity style={{marginRight: 10}} onPress={rightPress[1]}>
        <Icons name={rightIcons[1]} color="#21B4BD" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={rightPress[0]}>
        <Icons name={rightIcons[0]} color="#21B4BD" size={30} />
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <StatusBar backgroundColor={'#CAD1D1'} barStyle={'dark-content'} />
      <View style={styles.container}>
        {renderLeft()}
        {isSearch ? (
          <View style={styles.search}>
            <TextInput
              value={search}
              onChangeText={onSearchText}
              placeholder="Search"
              style={styles.searchText}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={onSearch}>
              <Icons name="search" color="#21B4BD" />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.items}>
              {rightIcons.length !== 0 && renderRight()}
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#CAD1D1',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 55,
  },
  items: {
    width: '20%',
  },
  title: {
    color: '#21B4BD',
    fontSize: fonts.font20,
    textTransform: 'capitalize',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
  },
  search: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginLeft: -40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  searchText: {
    fontSize: fonts.font14,
    padding: 7,
    flex: 1,
  },
});

export default HaederApp;
