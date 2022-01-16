import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../component/header/header';
import {color} from './../../constant/styleColor';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

export default function NotificationDetailScreen(props) {
  console.log(props.route.params.data.titleLogo);
  const source = {
    html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`,
  };
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container]}>
      <Header
        buttonBack={true}
        backgroundColor={color.white}
        nameLogo={props.route.params.data.titleLogo}
        colorText={{color: color.active}}
        styles={[styles.customHeader]}
      />
      <ScrollView showsVerticalScrollIndicator>
        <RenderHtml contentWidth={width} source={source} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  customHeader: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
});
