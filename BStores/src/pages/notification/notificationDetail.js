import React from 'react';
import {View, StyleSheet} from 'react-native';
import HaederApp from '../../components/haederApp';

const NotificationDetail = props => {
  return (
    <View style={{flex: 1}}>
      <HaederApp title={'Notification Detail'} backable {...props} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NotificationDetail;
