import React from 'react';
import {View, Text} from 'react-native';

export default function Sidebar(props) {
  return (
    <View>
      <Text>Hello Sidebar {props.nama}</Text>
    </View>
  );
}
