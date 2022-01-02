import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {styleColorIcon} from './../../constant/styleColor';
import Icon from 'react-native-vector-icons/Ionicons';

function CustomInputSearch(props) {
  const {placeholder, editable, style} = props;
  return (
    <View style={[styles.container, style]}>
      <Icon name="search" color={'black'} size={20} />
      <TextInput
        editable={editable}
        placeholder={placeholder}
        style={[styles.input]}
        placeholderTextColor={'black'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    // borderColor: 'black',
    // borderWidth: 1,
    height: 37,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    marginLeft: 5,
    flex: 1,
    height: 37,
    marginTop: 3,
    color: 'black',
    fontWeight: '300',
    // alignItems:'center'
  },
});
export default CustomInputSearch;
