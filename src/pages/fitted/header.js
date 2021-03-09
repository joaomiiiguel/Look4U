import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function header(props) {

    const navigation = useNavigation();
    

    function navigateBack(){
        navigation.navigate('ShopPage')
      }

    return (
        
        <View style={styles.header}>
            <View style={styles.optLogo} > 
                <Image source={require('../../../assets/logos/logoOriginal.png')} style={styles.logo} resizeMode= 'contain' />
            </View>
        </View>
    );
}