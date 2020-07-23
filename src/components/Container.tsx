import React from 'react';
import {
    Dimensions, Image, StatusBar, StyleSheet
} from 'react-native';

import theme, { Box } from './Theme';


export const assets = [require('../assets/img/patterns/bg_pattern_1.png')];

const { width } = Dimensions.get('window');
const aspectRatio = 1500 / 1000;
const height = width / aspectRatio;

interface ContainerProps {
    children: React.ReactNode;
}

const Container = () => {
    return (
        <Box
            flex={1}
            backgroundColor='white' >
            <StatusBar barStyle='light-content' />
            <Box
                borderBottomLeftRadius='xl'
                overflow='hidden'
                height={height * 0.61}>
                <Image source={assets[0]} style={{
                    width,
                    height,
                    borderBottomLeftRadius: theme.borderRadii.xl
                }} />
            </Box>
            <Box flex={1} >
                <Box
                    flex={1}
                    borderBottomLeftRadius='xl'
                    height={height * 0.61}>
                    <Image source={assets[0]} style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: -height * 0.61
                    }} />
                    <Box
                        flex={1}
                        borderRadius='xl'
                        borderTopLeftRadius={0}
                        backgroundColor='white'
                    ></Box>
                </Box>
            </Box>
        </Box >
    );
}


export default Container;
