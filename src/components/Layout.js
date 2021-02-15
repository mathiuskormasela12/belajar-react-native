import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

export default function Layout() {
  return (
    <View>
      <Title>Hello</Title>
    </View>
  );
}

const Title = styled.Text`
  color: red;
`;
