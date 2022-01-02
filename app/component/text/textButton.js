import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function TextButton(props) {
  const {name, fontSize = 16, onPress} = props;
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, fontSize]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
export default TextButton;
