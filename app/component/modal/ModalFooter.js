import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {background} from '../../constant/styleColor';
import {color} from './../../constant/styleColor';
import * as Animated from 'react-native-animatable';

export default function ModalFooter(props) {
  const {modal, onPress, style, flex} = props;
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={onPress}
        style={{flex: flex}}></TouchableOpacity>
      <Animated.View
        animation="fadeInUp"
        duration={200}
        easing="ease-in-out"
        style={[styles.modal, style]}>
        {modal}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: background.backgroundColor_modal,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 888,
  },
  modal: {
    flex: 2,
    backgroundColor: color.white,
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '100%',
  },
});
