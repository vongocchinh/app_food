/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './app/screen/login/Login';
import SignUp from './app/screen/signUp/signUp';
import store from './app/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import ForgotPassword from './app/screen/forgotPassword/forgotPassword';
import ForgotSendOTP from './app/screen/forgotPassword/sendOtp';
import NewPassword from './app/screen/forgotPassword/newPassword';
import AccuracyAccount from './app/screen/signUp/AccuracyAccount';
import SignUpComplete from './app/screen/signUp/signUpComplete';
import MainDrawer from './app/screen/drawer/main/MainDrawer';
import SearchScreen from './app/screen/search/searchScreen';
import CardDetail from './app/screen/cardDetail/cardDetail';
import PostScreen from './app/screen/postScreen/postScreen';
import ProductList from './app/screen/productList/productList';
import FilterScreen from './app/screen/filterScreen/filterScreen';
import ScreenPostSale from './app/screen/screenPostSale/ScreenPostSale';
import ScreenPostDetail from './app/screen/screenPostSale/ScreenPostDetail';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="MainDrawer">
          <Stack.Screen name="MainDrawer" component={MainDrawer} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ForgotSendOtp" component={ForgotSendOTP} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
          <Stack.Screen name="AccuracyAccount" component={AccuracyAccount} />
          <Stack.Screen name="SignUpComplete" component={SignUpComplete} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="CardDetail" component={CardDetail} />
          <Stack.Screen name="PostScreen" component={PostScreen} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="FilterScreen" component={FilterScreen} />
          <Stack.Screen name="ScreenPostSale" component={ScreenPostSale} />
          <Stack.Screen name="ScreenPostDetail" component={ScreenPostDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
