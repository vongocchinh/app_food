import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import Branch from './../RenderListItemRow/branch';
import Ratting from './../../ratting/ratting';
import {stylesText} from '../../../constant/styleColor';
import {styleColorIcon} from './../../../constant/styleColor';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RenderListRow(props) {
  const {data, activeScreen} = props;
  const SwitchActive = (active, data) => {
    switch (Number(active)) {
      case 1:
        return (
          <View style={[styles.container]}>
            {data &&
              data?.map((value, key) => {
                return <Item key={key} item={value} />;
              })}
          </View>
        );
      case 2:
        return (
          <View style={[styles.container_2]}>
            {data &&
              data?.map((value, key) => {
                return <ItemColumn key={key} item={value} />;
              })}
          </View>
        );
    }
  };
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={[{}]}>
      {SwitchActive(activeScreen, data)}
    </ScrollView>
  );
}

const Item = () => {
  let mytextvar =
    'Nem rán/chả giò Nem rán/chả giò Nem rán/chả giò Nem rán/chả giò';
  return (
    <View style={[styles.containerItem]}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={[styles.images]}
          source={require('../../../asset/images/food-banner3.jpg')}
        />
      </TouchableOpacity>

      <View style={[styles.detail]}>
        <Text numberOfLines={1} style={[styles.cardTitle]}>
          {mytextvar}
        </Text>
        <Text style={[styles.branch]}>Món ăn việt</Text>
        <Ratting style={{marginTop: 3}} />
        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
          <Text style={[styles.price]}>
            500.000
            <Text style={[stylesText.current]}>VNĐ</Text>
          </Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Icon name="heart-outline" color={styleColorIcon.icon} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ItemColumn = () => {
  let mytextvar =
    'Nem rán/chả giò Nem rán/chả giò Nem rán/chả giò Nem rán/chả giò';
  return (
    <View style={[styles.containerItem_column]}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={[styles.images_column]}
          source={require('../../../asset/images/food-banner3.jpg')}
        />
      </TouchableOpacity>

      <View style={[styles.detail_column]}>
        <Text numberOfLines={2} style={[styles.cardTitle]}>
          {mytextvar}
        </Text>
        <Text style={[styles.branch]}>Món ăn việt</Text>
        <Ratting style={{marginTop: 3}} />
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={[styles.price]}>
            500.000
            <Text style={[stylesText.current]}>VNĐ</Text>
          </Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Icon name="heart-outline" color={styleColorIcon.icon} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 110,
  },
  container_2: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: 130,
  },
  containerItem: {
    // flex: 2,
    width: '47%',
    marginBottom: 25,
    flexDirection: 'column',
  },
  images: {
    width: '100%',
    height: 180,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    // fontFamily:
  },
  detail: {
    marginTop: 5,
  },
  branch: {
    fontSize: 13,
    fontWeight: '300',
    color: 'black',
    marginTop: 3,
  },
  price: {
    fontSize: 15,
    color: styleColorIcon.buttonLogin,
  },
  // column
  detail_column: {
    marginTop: 5,
  },
  images_column: {
    width: '100%',
    height: 150,
  },
  containerItem_column: {
    marginBottom: 25,
    flexDirection: 'column',
    width: '100%',
  },
});
