import React, { Component } from 'react';
import { Container, View } from './login.styles';
import { Button, TextInput } from 'react-native-paper';

export default function Login() {

  return (
    <Container>
      <View>
        <TextInput mode='outlined' label='Login' />
      </View>
      <View>
        <TextInput mode='outlined' label='Senha' secureTextEntry={true} />
      </View>
      <Button mode='contained' onPress={() => console.log('Pressed')}>
        Entrar
        </Button>
    </Container>
  );

}
