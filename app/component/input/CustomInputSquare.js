import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const CustomInputSquare = props => {
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
    maxLength,
  } = props;
  const showError = touched && invalid;
  return (
    <View style={[styles.container]}>
      {label ? <Text style={[styles.label]}>{label}</Text> : null}
      <View
        style={[styles.containerInput, showError ? styles.borderError : null]}>
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
          placeholderTextColor={showError ? 'red' : 'black'}
          maxLength={maxLength}
        />
        <View style={[styles.icon]}>
          {iconValidate ? (
            <View style={[styles.icon]}>{iconValidate}</View>
          ) : null}
        </View>
      </View>
      {/* {showError ? <Text style={[styles.textError]}>{error}</Text> : null} */}
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
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    paddingBottom: 5,
  },
  containerIcon: {
    marginRight: 0,
  },
  icon: {},
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
  textError: {
    fontSize: 20,
    color: 'red',
  },
  borderError: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
export default CustomInputSquare;
