import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TextCenter(props) {
  const {name} = props;
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>{name}</Text>
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
    fontSize: 16,
  },
});
export default TextCenter;
