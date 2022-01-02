import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from './../../component/input/customInput';
import CustomButton from './../../component/button/customButton';
import TextCenter from './../../component/text/textCenter';
import TextButton from './../../component/text/textButton';
import CustomButtonIcon from './../../component/button/customButtonIcon';
import {styleColorIcon} from './../../constant/styleColor';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, reset} from 'redux-form';
import {Field} from 'redux-form';
import {required} from './../../constant/validate';
import {useDispatch} from 'redux';
import {useNavigation} from '@react-navigation/native';

const IconGoogle = <FontAwesome name="google" size={20} color={'white'} />;
const IconFaceBook = <FontAwesome name="facebook" size={20} color={'white'} />;
const IconInstagram = (
  <FontAwesome name="instagram" size={20} color={'white'} />
);
const IconUser = <FontAwesome name="user" size={18} color={'#787878'} />;
const IconPassword = <FontAwesome name="lock" size={18} color={'#787878'} />;
function Login(props) {
  const {handleSubmit, createRecord, resetForm} = props;
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  const onSubmit = data => {
    console.log(data);
    // dispatch(reset('LoginForm'));
    navigation.navigate('MainDrawer');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    // <View style={[styles.container]}>
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //       <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <Text style={[styles.headTitle]}>Xin Chào !</Text>
        <Text style={{fontSize: 12, color: styleColorIcon.white}}>
          Đăng nhập để tiếp tục vào trang bán hàng
        </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <View style={[styles.footerContainer]}>
          <Field
            required={true}
            component={CustomInput}
            icon={IconUser}
            placeholder="Tên tài khoản"
            name="username"
            validate={required}
          />
          <Field
            required={true}
            component={CustomInput}
            icon={IconPassword}
            placeholder="Mật khẩu"
            name="password"
            validate={required}
          />
          <View style={[styles.switchAccount]}>
            <Text>Lưu tài khoản mật khẩu</Text>
            <Switch
              trackColor={{false: '#767577', true: '#EB8D80'}}
              thumbColor={isEnabled ? '#FF6347' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            style={{fontWeight: '600'}}
            name="Đăng Nhập"
          />
          <TextButton
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{fontSize: 14}}
            name="Quên mật khẩu của bạn !!!"
          />
          <View style={[styles.containerButtonIcon]}>
            <CustomButtonIcon
              backgroundColor={styleColorIcon.red}
              icon={IconGoogle}
            />
            <CustomButtonIcon
              backgroundColor={styleColorIcon.faceBook}
              icon={IconFaceBook}
            />
            <CustomButtonIcon
              backgroundColor={styleColorIcon.instagram}
              icon={IconInstagram}
            />
          </View>
          <TextButton
            onPress={handleSignUp}
            name={
              <>
                Bạn chưa có tài khoản?{' '}
                <Text style={{color: '#FF6347', fontWeight: '600'}}>
                  Đăng ký
                </Text>
              </>
            }
          />
        </View>
      </Animatable.View>
    </View>
    //       </ScrollView>
    //     </TouchableWithoutFeedback>
    //   </KeyboardAvoidingView>
    // </View>
  );
}

const styles = StyleSheet.create({
  bgFB: {
    backgroundColor: '#0336BC',
  },
  bgGg: {
    backgroundColor: '#E25541',
  },
  bgLogin: {
    backgroundColor: '#FF6347',
  },
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headTitle: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  containerButtonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 110,
    marginBottom: 10,
  },
  switchAccount: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
});
export default compose(
  connect(null, null),
  reduxForm({form: 'LoginForm'}),
)(Login);
