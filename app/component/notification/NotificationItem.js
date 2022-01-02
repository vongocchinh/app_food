import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from './../../constant/styleColor';

export default function NotificationItem(props) {
  console.log(props.rowMap);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        props.data.index % 2 === 0 ? {backgroundColor: '#f2f2f2'} : null,
      ]}>
      <View
        style={[{flex: 1.2, justifyContent: 'center', alignItems: 'center'}]}>
        <Icon name="circle" size={10} color={color.active} />
      </View>
      <View style={{flex: 8, flexDirection: 'column'}}>
        <Text numberOfLines={1} style={[styles.title]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Text>
        <Text style={[styles.date]}>Bây giờ</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    zIndex: 333,
    backgroundColor: color.white,
    borderRightColor: '#f2f2f2',
    borderRightWidth: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    width: '95%',
  },
  date: {
    marginTop: 3,
    fontWeight: '300',
    color: 'black',
  },
});
