import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView
} from 'react-native';
import ClothesMenu from '../../components/clothesMenu/index';
import {useRoute} from  '@react-navigation/native'
import Header from '../../components/header/index';


export default function shopPage() {
    const route = useRoute();
    const [camisa,setCamisa] = useState();
    const [calca,setCalca] = useState();
    const [module, setModule] =useState();
    return (
        <SafeAreaView>
            <Header/>
            <ClothesMenu camisa={route.params?route.params.camisa:camisa} 
            calca={route.params?route.params.calca:calca} 
            moduleUsed={route.params?route.params.module:module}
            />
        </SafeAreaView>
    );
}


