import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../component/header/header';
import CustomInputSearch from './../../component/input/customInputSearch';
import {Field, reduxForm} from 'redux-form';

function SearchScreen() {
  return (
    <View style={[styles.container]}>
      <Header
        component={
          <Field
            name="search-product"
            placeholder="Tìm Kiếm"
            style={{flex: 1, marginLeft: 10}}
            component={CustomInputSearch}
          />
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default reduxForm({form: 'SearchScreenForm'})(SearchScreen);
