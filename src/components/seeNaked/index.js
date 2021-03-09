import React, {useEffect,useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {View,Text,Image, ImageBackground,
Dimensions} from 'react-native';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function seeNaked() {
    const height = 600
    const width = height * 0.25
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={require('../../../assets/corpo/corpoNu.png')} style={{height: height, width: width, alignItems:'center'}} />
        </View>
    );
}
    