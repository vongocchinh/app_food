import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ratting from './../../ratting/ratting';
import Branch from './branch';

function ItemRow() {
  let mytextvar =
    'Nem rán/chả giò Nem rán/chả giò Nem rán/chả giò Nem rán/chả giò';
  const maxlimit = 3;
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
    marginLeft: 15,
  },
  images: {
    height: '100%',
    width: 90,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    // fontFamily:
  },
});
export default ItemRow;
