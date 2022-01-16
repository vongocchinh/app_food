import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from './card';
import SlideProduct from './slideProduct';

export default function RenderSlideProductSearchTop(props) {
  const {data} = props;
  return (
    <>
      <SlideProduct>
        {data &&
          data?.map((value, key) => {
            return <Card value={value} key={key} />;
          })}
      </SlideProduct>
    </>
  );
}

const styles = StyleSheet.create({});
