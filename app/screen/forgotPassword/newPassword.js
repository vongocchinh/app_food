import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {View, StyleSheet, Text} from 'react-native';
import CustomInput from './../../component/input/customInput';
import {required} from './../../constant/validate';
import CustomButton from './../../component/button/customButton';
import {useNavigation} from '@react-navigation/native';
import Header from './../../component/header/header';

function NewPassword(props) {
  const {handleSubmit} = props;
  const navigation = useNavigation();
  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1}}>
      <Header nameLogo="Logo" />
      <View style={[styles.container]}>
        <Text style={[styles.headerText]}>Mật Khẩu Mới</Text>
        <Text style={[styles.titleText]}>
          Vui lòng nhập lại mật khẩu mới cho tài khoản của bạn !
        </Text>
        <Field
          component={CustomInput}
          placeholder="Nhập mật khẩu mới ..."
          validate={required}
          name="new-password"
        />
        <Field
          component={CustomInput}
          placeholder="Nhập lại mật khẩu mới ..."
          validate={required}
          name="confirm-new-password"
        />
        <CustomButton onPress={handleSubmit(onSubmit)} name="Tiếp Tục" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  titleText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});
export default compose(
  connect(null, null),
  reduxForm({form: 'NewPasswordForm'}),
)(NewPassword);
