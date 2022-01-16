import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TextNumberLine from '../text/textNumberLine';
import {styleColorIcon} from '../../constant/styleColor';
import Ratting from '../ratting/ratting';

export default function Card(props) {
  const {value} = props;
  const navigation = useNavigation();
  const handleCardDetail = () => {
    navigation.navigate('CardDetail', {
      data: value.id,
    });
  };
  return (
    <View style={[styles.itemCard]}>
      <TouchableOpacity onPress={handleCardDetail} activeOpacity={0.8}>
        <Image style={[styles.images]} source={value.images} />
      </TouchableOpacity>
      <View style={[styles.detail]}>
        <TextNumberLine
          numberOfLines={1}
          style={[styles.name]}
          title=" Phở bò món ăn Việt Nam nào sẽ hoàn thiện nếu thiếu phở? ..."
        />
        <Text style={[styles.branch]}>Món ăn Việt</Text>
        <Ratting />
        <Text style={[styles.price]}>
          400.000<Text style={{fontSize: 10}}>VNĐ</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemCard: {
    width: 120,
    marginRight: 10,
  },
  images: {
    width: '100%',
    height: 120,
  },
  detail: {
    marginTop: 5,
  },
  name: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
    textAlign: 'left',
  },
  branch: {
    fontSize: 12,
    color: 'black',
    fontWeight: '300',
  },
  price: {
    color: styleColorIcon.buttonLogin,
  },
});
