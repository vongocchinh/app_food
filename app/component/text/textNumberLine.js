import React from 'react';
import {Text} from 'react-native';

export default function TextNumberLine(props) {
  const {title, numberOfLines, testID, onPress, style} = props;
  return (
    <Text
      numberOfLines={numberOfLines}
      testID={testID}
      onPress={onPress}
      style={[style, {marginLeft: -5}]}>
      {title}
    </Text>
  );
}
