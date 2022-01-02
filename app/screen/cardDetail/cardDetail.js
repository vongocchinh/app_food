import React from 'react';
import {Text, View} from 'react-native';

export default function CardDetail(props) {
  return (
    <View>
      <Text>{props.route.params.data}</Text>
    </View>
  );
}
