import React from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  color: red;
  font-size: 40px;
`;

class BelajarTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      count: 0,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState((state, props) => {
      console.log(state);
      return {
        name: event,
      };
    });
  }

  handleCount = (event) => {
    //   untuk menampilkan alert
    // Alert.alert('Hello World');
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <View>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: 'red',
            marginTop: 200,
            backgroundColor: 'blue',
          }}>
          Belajar Handling Text Input
        </Text>
        <TextInput
          onChangeText={this.handleInput}
          placeholder="Your name"
          value={this.state.name}
        />
        <Text>Nama anda : {this.state.name}</Text>
        <Button title="Tambah" onPress={this.handleCount} />
        <Text style={{color: 'blue', marginTop: 20}}>
          Count : {this.state.count}
        </Text>
        <Text style={styles.header}>Styling</Text>
        <Title>Hello Component</Title>
      </View>
    );
  }
}

export default BelajarTextInput;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
