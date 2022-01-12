import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {color} from '../../constant/styleColor';
import Header from '../../component/header/header';

export default function ProductDetailScreen() {
  return (
    <View style={[style.container]}>
      <Text>productDetail</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
