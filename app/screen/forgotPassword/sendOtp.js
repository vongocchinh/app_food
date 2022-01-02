import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {View, StyleSheet, Text} from 'react-native';
import CustomInput from './../../component/input/customInput';
import {required} from './../../constant/validate';
import CustomButton from './../../component/button/customButton';
import TextButton from './../../component/text/textButton';
import {styleColorIcon} from './../../constant/styleColor';
import Header from './../../component/header/header';
import CustomInputSquare from './../../component/input/CustomInputSquare';
import {useNavigation} from '@react-navigation/native';

function ForgotSendOtp(props) {
  const {handleSubmit} = props;
  const navigation = useNavigation();
  const onSubmit = data => {
    console.log(data);
    navigation.navigate('NewPassword');
  };
  return (
    <View style={{flex: 1}}>
      <Header nameLogo="Logo" />
      <View style={[styles.container]}>
        <Text style={[styles.headerText]}>
          Chúng tôi đã gửi mã OTP tới địa chỉ email của bạn !
        </Text>
        <Text style={[styles.titleText, {marginTop: 5, marginBottom: 10}]}>
          Vui lòng kiểm tra địa chỉ email của bạn để lấy lại mật khẩu mới !
        </Text>
        <View style={[styles.containerInputNumber]}>
          <Field
            component={CustomInputSquare}
            placeholder="*"
            validate={required}
            name="OTP_1"
            maxLength={1}
          />
          <Field
            component={CustomInputSquare}
            placeholder="*"
            validate={required}
            name="OTP_2"
            maxLength={1}
          />
          <Field
            component={CustomInputSquare}
            placeholder="*"
            validate={required}
            name="OTP_3"
            maxLength={1}
          />
          <Field
            component={CustomInputSquare}
            placeholder="*"
            validate={required}
            name="OTP_4"
            maxLength={1}
          />
        </View>
        <CustomButton onPress={handleSubmit(onSubmit)} name="Tiếp Tục" />
        <TextButton
          name={
            <Text style={[styles.textClick]}>
              Bạn chưa nhận được mã !{' '}
              <Text style={{fontSize: 14, color: styleColorIcon.buttonLogin}}>
                lấy lại mã (45s)
              </Text>
            </Text>
          }
        />
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
  },
  textClick: {
    color: 'black',
    fontSize: 15,
  },
  containerInputNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});
export default compose(
  connect(null, null),
  reduxForm({form: 'ForgotSendOTPForm'}),
)(ForgotSendOtp);
