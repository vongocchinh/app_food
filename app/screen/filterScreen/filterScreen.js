import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './../../component/header/header';

export default function FilterScreen() {
  return (
    <View style={[styles.container]}>
      <Header nameLogo="Cài đặt bộ lọc" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
