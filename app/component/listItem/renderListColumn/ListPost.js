import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Item = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ScreenPostDetail')}
      activeOpacity={0.8}
      style={[styles.containerItem]}>
      <Image
        style={[styles.images]}
        source={require('../../../asset/images/food-banner3.jpg')}
      />
      <Text style={[styles.titlePost]}>Siêu khuyến mãi đầu năm 2022</Text>
      <Text style={[styles.titleDate]}>20.12.2021-20.02.2022</Text>
    </TouchableOpacity>
  );
};
export default function ListPost(props) {
  const {data} = props;
  return (
    <View style={[styles.container]}>
      {data &&
        data?.map((item, index) => {
          return <Item value={index} key={index} />;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  containerItem: {
    height: 130,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    position: 'relative',
  },
  images: {
    width: '100%',
    height: '100%',
    // flex:1
  },
  titleDate: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
  },
  titlePost: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
});
