import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomButton = props => {
  const {name, style, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FF6347',
    borderRadius: 10,
  },
  icon: {},
  containerIcon: {},
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
export default CustomButton;
