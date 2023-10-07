import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import Mainscreen from './screen/mainscreen';
import styles from './styles/mainstyle';
import Detail from './screen/detail';
import Pay from './screen/pay';
export default function App() {
  // useEffect(() => {
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: false,
  //       shouldSetBadge: false,
  //     }),
  //   });

  //   const trigger = {
  //     seconds: 1,
  //     repeats: false
  //   };

  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: 'Yêu cầu cấp quyền',
  //       body: 'Ứng dụng này muốn gửi thông báo cho bạn. Vui lòng cấp quyền trong cài đặt.',
  //     },
  //     trigger,
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Mainscreen/> */}
      {/* <Detail/> */}
      <Pay/>
    </View>
  );
}

