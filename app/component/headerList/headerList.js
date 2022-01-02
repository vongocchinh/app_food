import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styleColorIcon} from './../../constant/styleColor';

export default function HeaderListCard(props) {
  const {styleLeft, styleRight, title, onPress} = props;
  return (
    <View style={[styles.container]}>
      <Text style={[styleLeft, styles.textLeft]}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styleRight, styles.textRight]}>Xem Thêm</Text>
        <Icon
          style={{marginBottom: -2}}
          name="chevron-forward-outline"
          color={styleColorIcon.icon}
          size={16}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7,
  },
  textLeft: {
    fontSize: 16,
    fontWeight: '400',
    color: styleColorIcon.buttonLogin,
  },
  textRight: {
    color: 'black',
    fontSize: 13,
    fontWeight: '300',
  },
});
