import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';

export default function SlideProduct(props) {
  const {children} = props;
  return (
    <View style={[styles.container_layout]}>
      <ScrollView horizontal={true}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container_layout: {
    // flex: 1,
    overflow: 'scroll',
  },
  container: {
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // // height: 120,
    // overflow: 'scroll',
    // width: 500,
  },
});
