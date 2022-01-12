import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Branch from './branch';
import Ratting from './../../ratting/ratting';

function ItemProductSelling() {
  let mytextvar = 'Nem rán/chả giò chỉ với 120k';
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={[styles.container]}>
        <View style={[styles.containerImages]}>
          <Image
            style={[styles.images]}
            source={require('../../../asset/images/a.jpg')}
          />
        </View>
        <View style={[styles.containerDetail]}>
          <Text numberOfLines={2} style={[styles.cardTitle]}>
            {mytextvar}
          </Text>
          <Branch />
          <Ratting />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
    marginBottom: 10,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // elevation: 2,
  },
  containerImages: {
    flex: 1.2,
  },
  containerDetail: {
    flex: 3,
    marginLeft: 5,
  },
  images: {
    height: '100%',
    width: 90,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    // fontFamily:
  },
});
export default ItemProductSelling;
