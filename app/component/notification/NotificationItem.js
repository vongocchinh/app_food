import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from './../../constant/styleColor';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {categoryNotification} from './../../constant/utils';
import {useNavigation} from '@react-navigation/native';
export default function NotificationItem(props) {
  const navigation = useNavigation();
  const colorIconItem = id => {
    switch (id) {
      case '1':
        return color.blue;
      case '2':
        return color.active;
      case '3':
        return color.active;
      case '4':
        return color.red;
      case '5':
        return color.green;
      case '6':
        return color.blue;
      case '7':
        return color.green;
    }
  };
  const IconItem = categoryNotification.find(
    v => v.id === props.data.item.category,
  );
  return (
    <View style={[styles.containerItem]}>
      <View style={[styles.header]}>
        <View style={[styles.flex]}>
          <Icon2
            name={IconItem.icon}
            color={colorIconItem(IconItem.id)}
            size={22}
          />
          <Text style={[styles.titleHeader, {marginHorizontal: 7}]}>
            {IconItem.title}
          </Text>
          <Icon name="circle" size={10} color={color.active} />
        </View>
        <View style={[styles.flex]}>
          <Text style={[styles.date]}>{props.data.item.date}</Text>
          <TouchableOpacity onPress={() => props.handleOpen()}>
            <Icon2 name="ellipsis-horizontal" size={22} color={color.black} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NotificationDetailScreen', {
            data: {
              titleLogo: IconItem.title,
            },
          })
        }
        activeOpacity={1}
        style={[styles.container]}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text numberOfLines={1} style={[styles.title]}>
            {props.data.item.title}
          </Text>
          <Text numberOfLines={4} style={[styles.detail]}>
            {props.data.item.des}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 7,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
    width: '95%',
  },
  date: {
    fontWeight: '400',
    color: 'black',
    fontSize: 11,
    marginRight: 5,
    // transform:
  },
  containerItem: {
    borderRadius: 10,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: color.white,
    paddingHorizontal: 10,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    marginHorizontal: 1,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingVertical: 7,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },
  detail: {
    fontSize: 12,
    color: color.black,
    fontWeight: '300',
  },
});
