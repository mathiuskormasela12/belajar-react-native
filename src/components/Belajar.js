import React from 'react';
import {View, Text} from 'react-native';

export default class Belajar extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}
