import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function CustomButtonIcon(props) {
  const {icon, backgroundColor} = props;
  return (
    <TouchableOpacity>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View>{icon}</View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
export default CustomButtonIcon;
