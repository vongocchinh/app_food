import React from 'react';
import {Text, View} from 'react-native';
import {
  NavigationContainer,
  // DefaultTheme as NavigationDefaultTheme,
  // DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../Drawer';
import MainTabScreen from './MainTabScreen';
import ProfileTabScreen from './ProfileTabScreen';
// import {
// import MainTabScreen from './../../tab/MainTabScreen';
// import MainTabScreen from './../mainDrawer/MainTabScreen';
// Provider as PaperProvider,
//   DefaultTheme as PaperDefaultTheme,
//   DarkTheme as PaperDarkTheme,
// } from 'react-native-paper';

// const CustomDefaultTheme = {
//   ...NavigationDefaultTheme,
//   ...PaperDefaultTheme,
//   colors: {
//     ...NavigationDefaultTheme.colors,
//     ...PaperDefaultTheme.colors,
//     background: '#ffffff',
//     text: '#333333',
//   },
// };

// const CustomDarkTheme = {
//   ...NavigationDarkTheme,
//   ...PaperDarkTheme,
//   colors: {
//     ...NavigationDarkTheme.colors,
//     ...PaperDarkTheme.colors,
//     background: '#333333',
//     text: '#ffffff',
//   },
// };

const Drawer = createDrawerNavigator();

function MainDrawer() {
  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <Drawer.Navigator
      initialRouteName="MainTabScreen"
      options={{headerShown: false}}
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
      <Drawer.Screen name="ProfileTabScreen" component={ProfileTabScreen} />
    </Drawer.Navigator>
  );
}
export default MainDrawer;
