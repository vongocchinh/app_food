import React from 'react';
import {Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
// import {CommonStyles} from '../../utils/CommonStyles';
// import {moderateScale} from '../../utils/Scaling';

const CustomRadio = props => {
  const {
    choice: {Value, Name},
    status,
    handleChoice,
    style,
    color = '#5685FF',
    meta: {error, invalid, touched},
  } = props;
  const showError = touched && invalid;
  return (
    <View style={[{flexDirection: 'column', alignItems: 'flex-start'}, style]}>
      <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
        <RadioButton
          color={color}
          value={Value}
          status={status && 'checked'}
          onPress={() => handleChoice(Value)}
        />
        <Text style={{fontSize: moderateScale(10)}}>{Name}</Text>
      </View>
      {showError && (
        <Text style={[CommonStyles.errorText, {marginLeft: 7, marginTop: 5}]}>
          {error}
        </Text>
      )}
    </View>
  );
};
export default CustomRadio;
