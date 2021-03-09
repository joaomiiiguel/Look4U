import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles'
export default function provar(props){
    
    const navigation = useNavigation();
    function navigateTo (item){
        props.setBooleana()
        if ( item.category===1 || item.category===2 ){
            navigation.navigate('Fitted', {item:item,camisa:item,calca:props.calca})
        }else{
            navigation.navigate('Fitted', {item:item,camisa:props.camisa,calca:item})
        }
      }
  
   
    return( 
        <TouchableOpacity onPress={()=>navigateTo(props.item)}>
        <View style={styles.footerItem}>
            <Text style={{fontSize: 16, 
    fontWeight: "700", fontFamily:require('../../../assets/fonts/MazzardH-Black.otf'), color: "#fff"}} >Provar</Text>
        </View>
        </TouchableOpacity>
    );
}