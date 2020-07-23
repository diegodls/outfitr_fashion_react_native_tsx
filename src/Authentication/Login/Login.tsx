import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { Routes, StackNavigationProps } from '../../components/Navigation';

import { Container } from '../../components'


const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
    return (
        <Container>
            <View><Text>Login</Text></View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0C',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;

