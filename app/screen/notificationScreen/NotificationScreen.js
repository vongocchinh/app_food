import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {color} from './../../constant/styleColor';
import Header from './../../component/header/header';
import RenderListNotification from '../../component/notification/RenderListNotification';
import {dataNotification} from '../../constant/utils';
import ModalFooter from './../../component/modal/ModalFooter';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NotificationScreen() {
  const [Open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(state => !state);
  };
  const Modal = props => {
    const data = [
      {
        id: '1',
        title: 'Đánh dấu đã đọc',
        icon: 'checkmark-outline',
        onClick: null,
      },
      {id: '2', title: 'Bỏ quan tâm', icon: 'heart-outline', onClick: null},
      {id: '3', title: 'Xóa thông báo', icon: 'trash-outline', onClick: null},
      {id: '4', title: 'Hủy', icon: 'close-outline', onClick: props.onCancel},
    ];
    return (
      <View style={[styles.modal]}>
        {data.map((item, key) => {
          return (
            <TouchableOpacity
              onPress={item.onClick}
              key={key}
              style={[styles.itemModal]}>
              <Icon name={item.icon} color={color.black} size={20} />
              <Text style={[styles.titleModal]}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={[styles.container]}>
      {Open ? (
        <ModalFooter
          flex={6}
          modal={<Modal onCancel={handleOpen} />}
          onPress={handleOpen}
        />
      ) : null}
      {/* <StatusBar
        // barStyle="dark-content"
        translucent={false}
        backgroundColor="transparent"
      /> */}
      <Header
        buttonBack={false}
        backgroundColor={color.white}
        nameLogo="Thông Báo"
        colorText={{color: color.active}}
        styles={[styles.customHeader]}
      />
      <View style={[styles.notification]}>
        <RenderListNotification
          handleOpen={handleOpen}
          data={dataNotification}
        />
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
  customHeader: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    color: color.active,
  },
  notification: {
    paddingHorizontal: 13,
  },
  titleModal: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginLeft: 15,
  },
  modal: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemModal: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
});
