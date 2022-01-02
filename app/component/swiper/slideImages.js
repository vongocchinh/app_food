import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
export default function SlideImages() {
  return (
    <View style={{borderRadius: 3}}>
      <Swiper
        autoplay={true}
        dot={false}
        horizontal={true}
        // showsPagination={false}
        index={3}
        showsButtons={false}
        style={{borderRadius: 5}}
        height={150}
        activeDotColor="#FF6347">
        <View style={styles.slide}>
          <Image
            source={require('../../asset/images/a.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../asset/images/food-banner2.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../asset/images/food-banner3.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../asset/images/food-banner4.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../asset/images/food-banner5.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 3,
  },
  sliderImage: {
    height: '100%',
    borderRadius: 3,
    width: '100%',
  },
});
