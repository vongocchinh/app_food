import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {styleColorIcon, color} from './../../constant/styleColor';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function FilterComponent(props) {
  const {active} = props;
  const handleConvert = value => {
    props.handleActive(Number(value));
  };
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('FilterScreen')}
        activeOpacity={0.5}
        style={[styles.button]}>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: 'black',
            fontWeight: '400',
          }}>
          Bộ Lọc
        </Text>
      </TouchableOpacity>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => handleConvert(1)}>
          <Icon
            name="grid-outline"
            color={Number(active) === 1 ? color.black : styleColorIcon.icon}
            size={30}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleConvert(2)}>
          <Icon
            name="square-outline"
            color={Number(active) === 2 ? color.black : styleColorIcon.icon}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EFEF',
  },
  button: {
    flex: 3,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
