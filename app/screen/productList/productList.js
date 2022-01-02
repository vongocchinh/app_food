import React from 'react';
import {View, StyleSheet} from 'react-native';
import FilterComponent from '../../component/filterHeader/filterComponent';
import RenderListRow from '../../component/listItem/renderListRow/renderListRow';
import Header from './../../component/header/header';

export default function ProductList() {
  const [active, setActive] = React.useState(1);
  const handleActive = value => {
    setActive(Number(value));
  };
  return (
    <View style={[styles.container]}>
      <Header nameLogo="Sản phẩm bán chạy" />
      <View style={[styles.rowProduct]}>
        <FilterComponent active={active} handleActive={handleActive} />
        <RenderListRow
          activeScreen={active}
          data={[
            1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  rowProduct: {
    paddingHorizontal: 15,
  },
});
