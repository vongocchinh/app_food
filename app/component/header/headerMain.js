import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styleColorIcon} from './../../constant/styleColor';
import {useNavigation} from '@react-navigation/native';
import CustomInputSearch from './../input/customInputSearch';
const IconCart = <Icon name="cart-outline" color={'black'} size={30} />;
function HeaderMain(props) {
  const navigation = useNavigation();
  return (
    <View style={[style.container]}>
      <View style={[style.container_2]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" color={'black'} size={30} />
        </TouchableOpacity>
        <View style={[style.input]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchScreen')}
            activeOpacity={1}>
            <CustomInputSearch editable={false} placeholder="Tìm Kiếm" />
          </TouchableOpacity>
        </View>
      </View>
      <View>{IconCart}</View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: styleColorIcon.buttonLogin,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    marginRight: 10,
  },
  container_2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
  },
});
export default HeaderMain;
