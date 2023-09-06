import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import { Appbar } from 'react-native-paper'

const AppBars = (props: any) => {


  return (
    // <TouchableOpacity
    //   style={{
    //     ...styles.AppBars,
    //     ...{ backgroundColor: bgColor },
    //     ...props.style
    //   }}
    //   onPress={props.onPress}
    // >
    //   <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
    // </TouchableOpacity>

    <Appbar.Header style={{ backgroundColor: '#ADD8E6' }}>
      <Appbar.Content title={props.title} />
      <Appbar.Action icon="magnify" onPress={() => { }} />
      <Appbar.Action icon="dots-vertical" onPress={() => { }} />
    </Appbar.Header>
  )
}

export default AppBars