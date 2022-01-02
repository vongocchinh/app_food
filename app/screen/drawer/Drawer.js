import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

function DrawerComponent(props) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation('ProfileTabScreen')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DrawerComponent;
