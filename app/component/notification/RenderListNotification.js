import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import NotificationItem from './NotificationItem';
import {SwipeListView} from 'react-native-swipe-list-view';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from './../../constant/styleColor';
export default function RenderListNotification(props) {
  //   const {data} = props;
  const RenderHiddenItem = data => {
    // const rowActionAnimatedValue = new Animated.Value(75);
    // const rowHeightAnimatedValue = new Animated.Value(60);
    const handleDelete = () => {
      //   data.handleDelete(data.data.item);
      // console.log(data.rouMap);
    };
    return (
      //   <HiddenItemWithActions
      //     data={data}
      //     rowMap={rowMap}
      //     rowActionAnimatedValue={rowActionAnimatedValue}
      //     rowHeightAnimatedValue={rowHeightAnimatedValue}
      //     onClose={() => closeRow(rowMap, data.item.key)}
      //     onDelete={() => deleteRow(rowMap, data.item.key)}
      //   />
      <View style={[styles.rowBack]}>
        <TouchableOpacity onPress={handleDelete} style={[styles.buttonDelete]}>
          <Icon name="trash-outline" color={color.active} size={24} />
        </TouchableOpacity>
      </View>
    );
  };
  const handleDeletes = index => {};
  return (
    <View
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      style={[styles.container]}>
      <SwipeListView
        style={{height: '96%'}}
        data={props.data}
        renderItem={(data, rowMap) => (
          <NotificationItem
            handleOpen={props.handleOpen}
            rouMap={rowMap}
            data={data}
          />
        )}
        // leftOpenValue={75}
        disableRightSwipe
        // leftActivationValue={100}
        // rightActivationValue={-200}
        // leftActionValue={0}
        // rightActionValue={-500}
        rightOpenValue={-75}
        renderHiddenItem={(data, rowMap) => (
          <RenderHiddenItem
            data={data}
            rouMap={rowMap}
            handleDelete={handleDeletes}
          />
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 4,
  },
  rowBack: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  buttonDelete: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
