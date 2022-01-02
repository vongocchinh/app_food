import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const CustomInput = props => {
  const {
    label,
    icon,
    iconValidate,
    textError,
    placeholder,
    input: {name, onChange},
    meta: {error, invalid, valid, touched, active},
    isDisabled = false,
    editable,
    defaultValue,
  } = props;
  const showError = touched && invalid;
  return (
    <View style={[styles.container]}>
      {label ? <Text style={[styles.label]}>{label}</Text> : null}
      <View style={[styles.containerInput]}>
        <View style={[styles.containerIcon]}>
          {icon ? <View style={[styles.icon]}>{icon}</View> : null}
        </View>
        <TextInput
          name={name}
          onChangeText={onChange}
          placeholder={placeholder}
          style={[styles.input]}
          defaultValue={defaultValue}
          isDisabled={isDisabled}
        />
        <View style={[styles.icon]}>
          {iconValidate ? (
            <View style={[styles.icon]}>{iconValidate}</View>
          ) : null}
        </View>
      </View>
      {showError ? <Text style={[styles.textError]}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 15,
  },
  containerInput: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  label: {
    fontSize: 16,
    paddingBottom: 5,
  },
  containerIcon: {
    marginRight: 5,
  },
  icon: {},
  input: {
    flex: 1,
  },
  textError: {
    fontSize: 13,
    color: 'red',
  },
});
export default CustomInput;
