/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';
import Belajar from './src/components/Belajar';
import BelajarTextInput from './src/components/BelajarTextInput';

function Footer() {
  return (
    <View>
      <Text>Hello Footer</Text>
    </View>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mathius',
      data: this.props.data,
    };
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" />
        <Text>Hello {this.state.name}</Text>
        <Header />
        <Footer />
        <Sidebar nama="Matt" />
        <Belajar message="Belajar React Native" />
        <BelajarTextInput name="Mathius" />
      </View>
    );
  }
}

export default App;
