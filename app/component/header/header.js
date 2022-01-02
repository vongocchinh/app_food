import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import {styleColorIcon, color} from './../../constant/styleColor';
import {useNavigation} from '@react-navigation/native';
const IconBack = (
  <FontAwesome name="arrow-back-outline" size={24} color={'#000'} />
);
// const IconBackMenu = <FontAwesome name="ellipsis-v" size={20} color={'#fff'} />;
function Header(props) {
  const {
    nameLogo,
    component,
    backgroundColor = color.active,
    styles,
    buttonBack = true,
    colorText,
  } = props;
  const navigation = useNavigation();
  return (
    <View style={[style.container, {backgroundColor: backgroundColor}, styles]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[{width: 20, justifyContent: 'flex-start'}]}>
          {buttonBack ? IconBack : null}
        </View>
      </TouchableOpacity>
      {nameLogo ? (
        <Text style={[style.logo, colorText]}>{nameLogo}</Text>
      ) : null}
      {component ? component : null}
      <View style={[{width: 20, justifyContent: 'flex-end'}]}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  logo: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default Header;
