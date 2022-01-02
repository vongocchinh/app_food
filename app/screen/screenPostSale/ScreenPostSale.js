import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './../../component/header/header';
import ListPost from './../../component/listItem/renderListColumn/ListPost';

export default function ScreenPostSale() {
  const data = [1, 2, 3];
  return (
    <View style={[styles.container]}>
      <Header nameLogo="Bài viết khuyến mãi" />
      <ScrollView style={{paddingHorizontal: 15, marginTop: 10}}>
        <ListPost data={data} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
