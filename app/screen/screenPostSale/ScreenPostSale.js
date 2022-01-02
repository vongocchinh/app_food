import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './../../component/header/header';
import ListPost, {
  ItemPost,
} from './../../component/listItem/renderListColumnPost/ListPost';
import Icon from 'react-native-vector-icons/Ionicons';
import {styleColorIcon} from './../../constant/styleColor';
import * as Animatable from 'react-native-animatable';
export default function ScreenPostSale() {
  const data = [1, 2, 3, 4];
  const [active, setActive] = React.useState(false);
  const handleModal = () => {
    setActive(state => !state);
  };
  return (
    <View style={[styles.container]}>
      <Header nameLogo="Bài viết khuyến mãi" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 15, marginTop: 10}}>
        <ItemPost />
        <View style={[styles.filter]}>
          <Text style={[styles.textFilter]}>Bộ lọc</Text>
          <TouchableOpacity onPress={handleModal}>
            <Icon name="filter" color={styleColorIcon.icon} size={22} />
          </TouchableOpacity>
        </View>
        <ListPost data={data} />
      </ScrollView>
      {active ? (
        <View style={[styles.viewModal]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={handleModal}
            style={{flex: 3}}></TouchableOpacity>
          <Animatable.View
            animationEnd="fadeInDownBig"
            animation="fadeInUpBig"
            style={[styles.modal]}>
            <TouchableOpacity onPress={handleModal}>
              <Icon name="close" color={styleColorIcon.icon} size={26} />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  filter: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  textFilter: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  modal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    height: 150,
    flex: 0.8,
    padding: 5,
  },
  viewModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    zIndex: 555,
    overflow: 'hidden',
  },
});
