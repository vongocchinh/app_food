import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from '../../component/header/header';
import {color} from './../../constant/styleColor';
import Icon from 'react-native-vector-icons/Ionicons';
import Ratting from './../../component/ratting/ratting';

export default function CardDetail(props) {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container]}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={[styles.customHeaderView]}>
        <Header
          buttonBack={true}
          backgroundColor={'transparent'}
          colorText={{color: color.active}}
          styles={[styles.customHeader]}
          IconRight={
            <Icon
              style={{marginLeft: -10}}
              name="cart-outline"
              size={30}
              color={color.black}
            />
          }
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.customMain]}>
        <View>
          <Image
            style={[styles.imagesProductBig, {width: width}]}
            source={require('../../asset/images/food-banner2.jpg')}
          />
        </View>
        <View style={[styles.main]}>
          <Text numberOfLines={2} style={[styles.textName]}>
            Chả cá Chả cá Lã Vọng
          </Text>
          <Text style={[styles.branch]}>Món ăn việt</Text>
          <Text style={{fontSize: 17, fontWeight: '400', color: color.active}}>
            500.000
            <Text
              style={{fontSize: 12, fontWeight: '400', color: color.active}}>
              VNĐ
            </Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}>
            <Ratting sizeIcon={20} style={styles.start} />
            <View style={{flexDirection: 'row'}}>
              <Icon
                style={{marginRight: 5}}
                name="heart-outline"
                size={20}
                color={color.black}
              />
              <Icon name="arrow-redo-outline" size={20} color={color.blue} />
            </View>
          </View>
          <View style={[styles.choiceSize]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="bookmarks-outline" color={color.black} size={18} />
              <Text style={[styles.titleChoice, {marginLeft: 5}]}>
                Chọn kích thước :
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 10,
                marginTop: 10,
              }}>
              <Text style={[styles.checkbox, styles.check]}>M</Text>
              <Text style={[styles.checkbox]}>L</Text>
              <Text style={[styles.checkbox]}>XL</Text>
            </View>
          </View>
          <View style={[styles.choiceSize]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="receipt-outline" color={color.blue} size={18} />
              <Text style={[styles.titleChoice, {marginLeft: 5}]}>
                Chi tiết sản phẩm :
              </Text>
            </View>
            <View>
              <Text style={[styles.des]}>
                Danh sách món ăn Việt Nam nào sẽ hoàn thiện nếu thiếu phở? Gần
                như không thể đi bộ qua một khối nhà ở các thành phố lớn của
                Việt Nam mà không gặp một đám đông khách quen đói meo đang xì
                xụp tại một hàng phở bình dân. Nguyên liệu chính đơn giản gồm có
                nước dùng đậm đà, bánh phở tươi, một chút rau thơm và thịt gà
                hoặc thịt bò. Món ăn này ngon, rẻ và bạn muốn ăn bất kỳ giờ nào
                trong ngày cũng có..
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Icon name="file-tray-full-outline" color={color.blue} size={18} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: 'black',
                marginLeft: 5,
              }}>
              Phí vận chuyển :
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '300',
                color: 'black',
                marginLeft: 5,
              }}>
              Miễn phí
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.customFooter]}>
        <TouchableOpacity activeOpacity={0.6} style={[styles.viewFooterLeft]}>
          <Icon
            name="chatbubble-ellipses-outline"
            size={25}
            color={color.black}
          />
          <Text style={{color: 'black', fontSize: 13, fontWeight: '400'}}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={[styles.viewFooterRight]}>
          <Icon name="cart-outline" size={25} color={color.black} />
          <Text style={{color: 'black', fontSize: 13, fontWeight: '400'}}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    position: 'relative',
  },
  customHeader: {},
  customFooter: {
    height: 60,
    borderTopColor: '#f2f2f2',
    borderTopWidth: 1,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'white',
  },
  customMain: {
    flex: 9,
    marginBottom: 60,
  },
  customHeaderView: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    zIndex: 55555,
  },
  viewFooterLeft: {
    flexDirection: 'column',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#f2f2f2',
  },
  viewFooterRight: {
    flexDirection: 'column',
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesProductBig: {
    height: 300,
    resizeMode: 'cover',
  },
  main: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  textName: {
    fontSize: 17,
    color: 'black',
    fontWeight: '400',
  },
  branch: {
    fontSize: 14,
    color: 'black',
    fontWeight: '300',
    marginBottom: 10,
  },
  start: {
    fontSize: 13,
  },
  choiceSize: {
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  titleChoice: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
  des: {
    fontSize: 13,
    color: 'black',
    fontWeight: '300',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  checkbox: {
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    width: 40,
    fontSize: 13,
    color: color.black,
    fontWeight: '400',
  },
  check: {
    backgroundColor: color.active,
    color: color.white,
  },
});
