import React from 'react';
import {View, StyleSheet} from 'react-native';
import {color} from './../../constant/styleColor';
import Header from './../../component/header/header';
import RenderListNotification from '../../component/notification/RenderListNotification';

export default function NotificationScreen() {
  return (
    <View style={[styles.container]}>
      <Header
        buttonBack={false}
        backgroundColor={color.white}
        nameLogo="Thông Báo"
        colorText={{color: color.active}}
        styles={[styles.customHeader]}
      />
      <View style={[styles.notification]}>
        <RenderListNotification data={[1, 2, 3, 4, 5, 6, 7]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  customHeader: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    color: color.active,
  },
  notification: {
    // paddingHorizontal: 15,
  },
});
