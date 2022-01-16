import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from '../../constant/styleColor';

const CustomRadio = props => {
  const {
    choice,
    checked,
    handleChoice,
    style,
    // color = '#5685FF',
    meta: {error, invalid, touched},
  } = props;
  const showError = touched && invalid;
  const onHandleChoice = () => {
    handleChoice(choice.Value);
  };
  return (
    <TouchableOpacity
      onPress={onHandleChoice}
      style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      <Text
        style={[
          styles.checkbox,
          checked ? styles.check : null,
          showError ? styles.errorChoice : null,
        ]}>
        {choice.Title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    width: 40,
    fontSize: 13,
    color: color.black,
    fontWeight: '400',
  },
  check: {
    backgroundColor: color.active,
    color: color.white,
  },
  errorChoice: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
export default CustomRadio;
