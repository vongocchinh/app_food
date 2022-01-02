import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styleColorIcon} from './../../constant/styleColor';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Ratting(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon
        style={{marginTop: -1}}
        name="star"
        color={styleColorIcon.buttonLogin}
        size={16}
      />
      <Text numberOfLines={1} style={[styles.numberRatting]}>
        51
      </Text>
      <Text style={[styles.textRatting]}>(126 đánh giá)</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  numberRatting: {
    color: styleColorIcon.buttonLogin,
    fontSize: 13,
    marginLeft: 2,
    fontWeight: '300',
  },
  textRatting: {
    color: '#B2B2B2',
    fontSize: 13,
    marginLeft: 2,
    fontWeight: '300',
  },
});
export default Ratting;
