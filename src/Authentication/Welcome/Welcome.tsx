import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

interface WelcomeProps{};

const Welcome = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Welcome</Text>
            </View>
        </>
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

export default Welcome;