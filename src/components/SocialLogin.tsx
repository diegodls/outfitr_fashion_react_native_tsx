import React, { ReactNode } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import theme, { Box, Text } from './Theme';

const Google = require('../assets/img/social_logos/Google.png');
const Facebook = require('../assets/img/social_logos/Facebook.png');
const Apple = require('../assets/img/social_logos/Apple.png');
const SIZE = theme.borderRadii.l * 2;

interface SocialIconProps {
    children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
    return (
        <Box backgroundColor='white'
            width={SIZE}
            height={SIZE}
            borderRadius='l'          
            marginHorizontal='s'
            justifyContent='center'
            alignItems='center' >
            {children}
        </Box>
    )
}

const SocialLogin = () => {

    return (
        <Box
            flexDirection='row'
            justifyContent='center'            
        >
            <SocialIcon>
                <Image source={Google} style={styles.image} />
            </SocialIcon>
            <SocialIcon>
                <Image source={Facebook} style={styles.image} />
            </SocialIcon>
            <SocialIcon>
                <Image source={Apple} style={styles.image} />
            </SocialIcon>            
        </Box >
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: SIZE / 2,
        height: SIZE / 2,
        resizeMode: 'contain',        
    },
});

export default SocialLogin;