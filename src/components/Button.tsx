import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useTheme } from '@shopify/restyle';
import { Theme, Text } from './Theme';

interface ButtonProps {
    label: string;
    variant: 'default' | 'primary' | 'transparent';
    onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
    const theme = useTheme<Theme>();
    const backgroundColor =
        variant === 'primary' ? theme.colors.primary : (variant === 'transparent' ? 'transparent' : theme.colors.gray);
    const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

    return (

        <RectButton
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
        >
            <Text variant='button' style={{ color }}>{label}</Text>
        </RectButton>
    );
}
Button.defaultProps = { variant: 'default' };

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Button;