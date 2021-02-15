import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Layout() {
  return (
    <View style={styled.container}>
      <Text style={styled.TopText}>Text 1</Text>
      <Text style={styled.BottomText}>Text 2</Text>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  TopText: {
    flex: 1,
    backgroundColor: 'blue',
  },
  BottomText: {
    flex: 2,
    backgroundColor: 'red',
  },
});
