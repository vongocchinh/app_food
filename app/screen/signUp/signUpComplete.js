import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import CustomButton from '../../component/button/customButton';
import Header from './../../component/header/header';
import * as Animatable from 'react-native-animatable';
import {useTheme, useNavigation} from '@react-navigation/native';
import {height_logo} from './../../constant/styleWindown';
function SignUpComplete(props) {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header nameLogo="Logo" />
      <View style={[styles.container]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../../asset/images/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Text style={[styles.text]}>
          Quên mật khẩu thành công .Bây giờ bạn có thể đăng nhập với tài khoản
          của bạn
        </Text>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          name="Tiếp Tục"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
});
export default SignUpComplete;
