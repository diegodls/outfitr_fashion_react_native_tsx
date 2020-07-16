import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

//parei 28:24
//https://www.youtube.com/watch?v=XmEFmR4SBP0

const SubSlide = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>SubSlide</Text>
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

export default SubSlide;