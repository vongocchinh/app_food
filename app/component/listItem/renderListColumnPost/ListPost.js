import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ItemPost = props => {
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
      <Text numberOfLines={1} style={[styles.titlePost]}>
        Siêu khuyến mãi đầu năm 2022
      </Text>
      <Text style={[styles.titleDate]}>20.12.2021-20.02.2022</Text>
    </TouchableOpacity>
  );
};
const ItemRow = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ScreenPostDetail')}
      activeOpacity={0.8}
      style={[styles.containerItemRow]}>
      <Image
        style={[styles.images_row]}
        source={require('../../../asset/images/food-banner3.jpg')}
      />
      <View style={{marginLeft: 10, flex: 3}}>
        <Text numberOfLines={2} style={[styles.titlePost_row]}>
          Siêu khuyến mãi đầu năm 2022 nhất đêm nay
        </Text>
        <Text style={[styles.titleDate_row]}>20.12.2021-20.02.2022</Text>
        <Text style={[styles.description]} numberOfLines={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default function ListPost(props) {
  const {data} = props;
  return (
    <View style={[styles.container]}>
      {data &&
        data?.map((item, index) => {
          return <ItemRow value={index} key={index} />;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  containerItem: {
    height: 170,
    borderRadius: 3,
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
  containerItemRow: {
    height: 100,
    flexDirection: 'row',
    marginBottom: 15,
  },
  images_row: {
    flex: 1.5,
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  titlePost_row: {
    fontWeight: '500',
    color: 'black',
    fontSize: 14,
  },
  titleDate_row: {
    fontWeight: '400',
    color: 'black',
    fontSize: 13,
  },
  description: {
    fontSize: 13,
    fontWeight: '300',
    color: 'black',
  },
});
