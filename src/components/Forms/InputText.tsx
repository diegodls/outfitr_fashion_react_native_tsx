import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps
} from 'react-native';

import IconFE from 'react-native-vector-icons/Feather';

import { Box, theme } from '../../components';

IconFE.loadFont();


interface TextInputProps extends RNTextInputProps {
    icon: string;
    touched?: boolean;
    error?: string;
}

const SIZE = theme.borderRadii.m * 2;


const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {


    const reColor = !touched ? 'text' : (error ? 'danger' : 'primary');
    const color = theme.colors[reColor];

    return (
        <Box
            flexDirection='row'
            alignItems='center'
            height={48}
            borderRadius='s'
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={reColor} >
            <Box padding='s'>
                <IconFE
                    name={icon}
                    color={color}
                    size={16} />
            </Box>
            <Box flex={1}>
                <RNTextInput
                    underlineColorAndroid='transparent'
                    placeholderTextColor={color}
                    {...props} />
            </Box>
            {touched && (
                <Box
                    height={SIZE}
                    width={SIZE}
                    borderRadius='m'
                    marginRight='s'
                    justifyContent='center'
                    alignItems='center'
                    backgroundColor={!error ? 'primary' : 'danger'}
                >
                    <IconFE
                        name={!error ? 'check' : 'x'}
                        color='white'
                        size={16} />
                </Box>
            )
            }

        </Box>
    );
}

export default TextInput;