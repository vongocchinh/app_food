import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {background} from '../../constant/styleColor';
import {color} from '../../constant/styleColor';
import * as Animated from 'react-native-animatable';

export default function ModalSuccess(props) {
  const {modal, style, flex, onPress} = props;
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          animation="fadeInUp"
          duration={200}
          easing="ease-in-out"
          style={[styles.modal, style]}>
          {modal}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: background.backgroundColor_modal_success,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 888,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {},
});
