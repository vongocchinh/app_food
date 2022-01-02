import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableHighlightBase,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderMain from './../../component/header/headerMain';
import ItemRow from './../../component/listItem/RenderListItemRow/ItemRow';
import SlideImages from './../../component/swiper/slideImages';
import SlideProduct from '../../component/customList/slideProduct';
import RenderSlideProduct from './../../component/customList/renderSlideProduct';
import HeaderListCard from '../../component/headerList/headerList';
import ListPost from './../../component/listItem/renderListColumnPost/ListPostHome';
import {styleColorIcon} from './../../constant/styleColor';
import {data2, data3, data1} from './data';

const SideBarTop = props => {
  const [indexKey, setIndexKey] = React.useState(0);
  const navigation = useNavigation();
  const handleNavigation = key => {
    setIndexKey(key);
    if (Number(key) !== 0) {
      navigation.navigate('PostScreen');
    }
  };
  return props.data.map((value, key) => {
    return (
      <View key={key}>
        <TouchableHighlight
          underlayColor="#F3F3F5"
          onPress={() => handleNavigation(key)}
          key={key}>
          <Text
            style={[
              styles.itemTabTop,
              key === 0
                ? {
                    fontWeight: '500',
                    color: styleColorIcon.buttonLogin,
                  }
                : null,
              indexKey === key && key !== 0
                ? {
                    borderBottomColor: styleColorIcon.buttonLogin,
                    borderBottomWidth: 1,
                  }
                : null,
            ]}>
            {value.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  });
};

function HomeStackScreen() {
  const navigation = useNavigation();
  const arr = [1, 2, 3, 4, 5];
  return (
    <View style={[styles.container]}>
      <HeaderMain />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <View style={[styles.barTop]}>
          <ScrollView horizontal={true}>
            <SideBarTop data={data3} />
          </ScrollView>
        </View>
        <View style={[styles.slide]}>
          <SlideImages />
        </View>
        <View style={[styles.row]}>
          <HeaderListCard
            onPress={() => navigation.navigate('ProductList')}
            title="Tìm Kiếm Hàng Đầu"
          />
          <RenderSlideProduct data={data1} />
        </View>
        <View style={[styles.row]}>
          <HeaderListCard
            onPress={() => navigation.navigate('ProductList')}
            title="Sản Phẩm Mới"
          />
          <RenderSlideProduct data={data1} />
        </View>
        <View style={[styles.containerListColumn]}>
          <HeaderListCard
            onPress={() => navigation.navigate('ProductList')}
            title="Bán Chạy"
          />
          {arr &&
            arr?.map((item, index) => {
              return <ItemRow key={index} />;
            })}
        </View>
        <View style={[styles.row]}>
          <HeaderListCard
            onPress={() => navigation.navigate('ScreenPostSale')}
            title="Khuyến Mãi"
          />
          <ListPost data={data2} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerListColumn: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  slide: {
    marginVertical: 10,
    borderRadius: 3,
    overflow: 'hidden',
  },
  row: {
    marginTop: 10,
    marginBottom: 10,
    // overflow: 'hidden',
  },
  barTop: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  itemTabTop: {
    fontSize: 15,
    paddingHorizontal: 7,
    fontWeight: '300',
    color: 'black',
    paddingVertical: 11,
    textAlign: 'center',
  },
});
export default HomeStackScreen;
