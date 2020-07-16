import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


const OnBoarding = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>OnBoarding</Text>
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

export default OnBoarding;