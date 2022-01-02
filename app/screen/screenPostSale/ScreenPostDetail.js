import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Header from './../../component/header/header';
import HeaderImageScrollView, {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import RenderHTML from 'react-native-render-html';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
export default function ScreenPostDetail() {
  const navTitleView = React.useRef(null);
  const {width} = useWindowDimensions();
  const source = {
    html: `
    <h2 style="color:black">Siêu khuyến mãi đầu năm 2022 !</h2>
    <h3 style="color:black">Nhanh tay lựa chọn những món ngon cực hấp từ chúng tôi !!!</h3>
    <img src="https://cdn.24h.com.vn/upload/3-2019/images/2019-08-16/1-1565953389-845-width1440height960.jpg" />
    <em style="textAlign: center;marginTop:5px">Món ăn việt nam</em>
    <p style='text-align:left;color:black;marginTop:-15px'>
    Món ăn này là đặc sản của tỉnh Quảng Nam nhưng được ưa chuộng trên khắp cả nước. Nguyên liệu gồm sợi mì, đậu phộng, bánh đa, thịt lợn quay và nước dùng có màu vàng của nghệ. Không ít du khách quốc tế khi được thưởng thức mì Quảng khi đến Việt Nam đã ca ngợi đây là món ăn hoàn hảo.
    <img style="marginTop:35px" src="https://cdn.24h.com.vn/upload/3-2019/images/2019-08-16/2-1565953389-205-width1440height960.jpg" />
    <em style="textAlign: center;marginTop:5px">Look at how happy this native cat is</em>
    <p style='text-align:left;color:black;marginTop:-15px'>
    Mỗi ngày ở Việt Nam có hàng triệu bát phở được phục vụ. Đây luôn được coi là món ăn nổi tiếng nhất và hấp dẫn nhất của nền ẩm thực Việt trong mắt du khách quốc tế..
    <img style="marginTop:35px" src="https://cdn.24h.com.vn/upload/3-2019/images/2019-08-16/4-1565953389-213-width1440height1080.jpg" />
    <em style="textAlign: center;marginTop:5px">Look at how happy this native cat is</em>
    <p style='text-align:left;color:black;marginTop:-15px'>
    Món ăn này được đặc biệt yêu thích vào bữa sáng hoặc trưa. Đầu bếp có thể thay thế thịt bò bằng bất kỳ loại thịt nào khác, ninh trong lửa nhỏ với nước mắm, đường và nước dừa tươi, cà rốt, hành tây và rau mùi. Cách ăn phổ biến nhất để thưởng thức món này là xé từng miếng bánh mì rồi nhúng vào phần nước sốt và ăn kèm với thịt hầm..
    </p>
    <img style="marginTop:35px" src="https://cdn.24h.com.vn/upload/3-2019/images/2019-08-16/2-1565953389-205-width1440height960.jpg" />
    <em style="textAlign: center;marginTop:5px">Look at how happy this native cat is</em>
    <p style='text-align:left;color:black;marginTop:-15px'>
    Mỗi ngày ở Việt Nam có hàng triệu bát phở được phục vụ. Đây luôn được coi là món ăn nổi tiếng nhất và hấp dẫn nhất của nền ẩm thực Việt trong mắt du khách quốc tế..
    <img style="marginTop:35px" src="https://cdn.24h.com.vn/upload/3-2019/images/2019-08-16/4-1565953389-213-width1440height1080.jpg" />
    <em style="textAlign: center;marginTop:5px">Look at how happy this native cat is</em>
    <p style='text-align:left;color:black;marginTop:-15px'>
    Món ăn này được đặc biệt yêu thích vào bữa sáng hoặc trưa. Đầu bếp có thể thay thế thịt bò bằng bất kỳ loại thịt nào khác, ninh trong lửa nhỏ với nước mắm, đường và nước dừa tươi, cà rốt, hành tây và rau mùi. Cách ăn phổ biến nhất để thưởng thức món này là xé từng miếng bánh mì rồi nhúng vào phần nước sốt và ăn kèm với thịt hầm..
    </p>
    `,
  };
  return (
    <View style={[style.container]}>
      <Header nameLogo="Bài viết" />
      <ImageHeaderScrollView
        maxHeight={200}
        minHeight={MIN_HEIGHT}
        disableHeaderGrow={true}
        headerImage={require('../../asset/images/food-banner3.jpg')}
        showsVerticalScrollIndicator={false}
        // renderFixedForeground={() => (
        //   <Animatable.View style={style.navTitleView} ref={navTitleView}>
        //     <Text style={style.navTitle}>a</Text>
        //   </Animatable.View>
        // )}
        // renderForeground={() => (
        //   <View
        //     style={{
        //       height: 150,
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //     }}>
        //     <TouchableOpacity onPress={() => console.log('tap!!')}>
        //       <Text style={{backgroundColor: 'transparent'}}>Tap Me!</Text>
        //     </TouchableOpacity>
        //   </View>
        // )}
      >
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <TriggeringView
            onHide={() => navTitleView.current.fadeInUp(200)}
            onDisplay={() => navTitleView.current.fadeOut(100)}>
            <RenderHTML contentWidth={width} source={source} />
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
});
