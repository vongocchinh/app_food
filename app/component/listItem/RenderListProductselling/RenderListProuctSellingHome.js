import React from 'react';
import {View} from 'react-native';
import ItemProductSelling from './ItemProductSelling';

export default function RenderListProductSellingHome(props) {
  const {data} = props;
  return (
    <View>
      {data &&
        data?.map((item, index) => {
          //   return
          return <ItemProductSelling key={index} />;
        })}
    </View>
  );
}
