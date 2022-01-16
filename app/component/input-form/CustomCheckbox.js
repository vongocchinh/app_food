import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {moderateScale, scale} from '../../utils/Scaling';
import CheckBox from '@react-native-community/checkbox';
import {CommonColors, CommonStyles} from '../../utils/CommonStyles';
const CustomCheckBox = props => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const {
    style,
    title,
    input: {name, onChange},
    meta: {error, invalid, touched},
  } = props;
  const handleOnChange = newValue => {
    setToggleCheckBox(newValue);
    onChange(newValue);
  };
  const showError = touched && invalid;
  return (
    <View
      style={[
        {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      ]}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: scale(-10),
          },
          style,
        ]}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={handleOnChange}
          tintColor={CommonColors.active}
          onFillColor={CommonColors.active}
          onTintColor={CommonColors.active}
          onCheckColor={CommonColors.active}
          tintColors={{true: CommonColors.active, false: '#9F9F9F'}}
          name={name}
        />
        <Text style={{fontSize: moderateScale(10)}}>{title}</Text>
      </View>
      {showError && (
        <Text style={[CommonStyles.errorText, {marginLeft: 7, marginTop: 5}]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  error: {
    color: 'red',
    fontSize: moderateScale(10),
    marginTop: scale(5),
    marginLeft: scale(5),
  },
});
export default CustomCheckBox;
