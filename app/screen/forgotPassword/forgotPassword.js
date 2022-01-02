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

function ForgotPassword(props) {
  const {handleSubmit} = props;
  const navigation = useNavigation();
  const onSubmit = data => {
    console.log(data);
    navigation.navigate('ForgotSendOtp');
  };
  return (
    <View style={{flex: 1}}>
      <Header nameLogo="Logo" />
      <View style={[styles.container]}>
        <Text style={[styles.headerText]}>Quên Mật Khẩu</Text>
        <Text style={[styles.titleText]}>
          Vui lòng nhập địa chỉ email của bạn để lấy lại mật khẩu mới !
        </Text>
        <Field
          component={CustomInput}
          placeholder="Email của bạn ..."
          validate={required}
          name="email"
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
  reduxForm({form: 'ForgotPasswordForm'}),
)(ForgotPassword);
