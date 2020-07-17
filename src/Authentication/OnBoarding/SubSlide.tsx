import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import Button from './Button';

interface SubSlideProps {
    subtitle: string;
    description: string;
    last: boolean;
    onPress: () => void;
};

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.subTitle}>{subtitle}</Text>
                <Text style={styles.description}>{description}</Text>
                <Button
                    label={last ? "Let's get started!" : "Next"}
                    variant={last ? "primary" : "default"}
                    {...{ onPress }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 44,
    },
    subTitle: {
        fontFamily: 'SFProText-Semibold',
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: '#0C0D34',
        textAlign: 'center',

    },
    description: {
        fontFamily: 'SFProText-Regular',
        fontSize: 16,
        lineHeight: 24,
        color: '#0C0D34',
        textAlign: 'center',
        marginBottom: 40,
    },
});

export default SubSlide;