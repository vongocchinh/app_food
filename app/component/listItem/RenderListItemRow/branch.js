import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Branch() {
  return (
    <View style={[style.container]}>
      <Text style={[style.text]}>Cade</Text>
      <Text style={[style.text]}>-</Text>
      <Text style={[style.text]}>Wastem Food</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    marginRight: 2,
    fontWeight: '300',
  },
});
export default Branch;
