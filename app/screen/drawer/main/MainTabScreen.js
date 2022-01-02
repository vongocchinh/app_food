import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {styleColorIcon} from '../../../constant/styleColor';
import MenuStackScreen from './../../Menu/MenuStackSreen';
import HomeStackScreen from './../../HomeStackScreen/HomeStackScreen';
import ProfileStackScreen from '../../ProfileScreen/ProfileStackSreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotificationScreen from './../../notificationScreen/NotificationScreen';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={[{flexDirection: 'row'}, styles.rowBar]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            activeOpacity={1}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[{flex: 1}, styles.itemBarView]}>
            {index === 1 ? (
              <Icon
                color={isFocused ? styleColorIcon.buttonLogin : '#787878'}
                name="mail-outline"
                size={26}
              />
            ) : null}
            {index === 0 ? (
              <Icon
                color={isFocused ? styleColorIcon.buttonLogin : '#787878'}
                name="notifications-outline"
                size={26}
              />
            ) : null}
            {index === 2 ? (
              <Icon
                color={isFocused ? styleColorIcon.buttonLogin : '#787878'}
                name="home-outline"
                size={26}
              />
            ) : null}
            {index === 3 ? (
              <Icon
                color={isFocused ? styleColorIcon.buttonLogin : '#787878'}
                name="person-outline"
                size={26}
              />
            ) : null}
            {index === 4 ? (
              <Icon
                color={isFocused ? styleColorIcon.buttonLogin : '#787878'}
                name="cart-outline"
                size={26}
              />
            ) : null}
            <Text
              style={[
                styles.itemBar,
                {color: isFocused ? styleColorIcon.buttonLogin : '#000'},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function MainTabScreen() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="Trang chủ"
      screenOptions={{headerShown: false}}
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen name="Thông báo" component={NotificationScreen} />
      <Tab.Screen name="Hộp thư" component={MenuStackScreen} />
      <Tab.Screen name="Trang chủ" component={HomeStackScreen} />
      <Tab.Screen name="Tài khoản" component={ProfileStackScreen} />
      <Tab.Screen name="Giỏ hàng" component={MenuStackScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  itemBar: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    color: 'black',
    fontWeight: '300',
  },
  itemBarIcon: {},
  rowBar: {
    flexDirection: 'row',
    // paddingVertical: 10,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderTopColor: '#EAEAEA',
    borderBottomColor: 'white',
    height: 60,
    paddingHorizontal: 5,
  },
  itemBarView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemActive: {
    color: styleColorIcon.buttonLogin,
    fontSize: 13,
  },
});
