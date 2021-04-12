import React, { Component } from 'react';
import { Container } from './login.styles';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Text>loginnnn</Text>
                <Button  mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </Container>
        );
    }
}
