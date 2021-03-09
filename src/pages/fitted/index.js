import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles'
import Header from './header'
import { useRoute, useNavigation } from '@react-navigation/native';
import SeeNaked from '../../components/seeNaked/index';
import ListraCinza from '../../components/listraCinza/index';
import {logo} from '../../../assets/api/dataClothes';
import Modal from '../../components/modal/index';
export default function fitted() {
    const navigation = useNavigation()
    const route = useRoute();
    const [atuallogo, setAtuallogo] = useState(null);
    const [save, setSave] = useState(false);
    const [image , setImage] = useState();
    const [mascara, setMascara] = useState();
    const [camisa, setCamisa] = useState(null);
    const [calca, setCalca] = useState(null);
    
    function navigateShopPage(camisa, calca, module){
      navigation.navigate("ShopPage",{camisa,calca,module,booleana:true})
      
    }
    useEffect(()  =>  {
      if (route.params){
        setImage(route.params.image)
        setMascara(route.params.mascara)
        setCamisa(route.params.camisa)
        setCalca(route.params.calca)
        setAtuallogo(route.params.item ? route.params.item.logo : null)
      }
    }, [route.params]);
    function printPhotos(uri){
      return {uri:uri};
    }
    function findLogo(){
      if (atuallogo){
        let filttedLogos = logo.filter(elemento=>elemento.name===atuallogo)
        
      return filttedLogos[0].image
      }
    }
    return (
        <View style={styles.container}> 
            <Header setSave={setSave}/>
            <View style={styles.modalStyle}>
              {
                save&&
                <Modal camisa={camisa} calca={calca} rosto={image} mascara={mascara.uriBranco} save={save} setSave={setSave}/>}
            </View>
            <View style={[styles.viewCorpo,save?styles.opacityTrue:styles.opacityFalse ]}>
               { image && 
                 <ListraCinza propsStyle={ {
                  position: 'absolute',
                }} />
               }
                { image &&
                  <Image source={image.uri} style={styles.rosto} />                  
                }
                { mascara &&
                  <Image source={mascara.uriBranco} style={styles.mascara} />
                }
                <SeeNaked/>
                { !camisa && <TouchableOpacity style={{zIndex:600}} onPress={()=>{navigateShopPage(camisa, calca, 2)}}>
                  <View style={{alignItems:'center', flex:1,zIndex:500, backgroundColor:"transparent", position:'absolute', bottom: 415, left:20}}>
                      <Image source={require('../../../assets/iconeDeNavegacao/bolinha.png')} style={{height:30,width:30}}></Image>
                  </View> 
                </TouchableOpacity>}
                { !calca && <TouchableOpacity style={{zIndex:600}} onPress={()=>{navigateShopPage(camisa, calca, 3)}}>  
                  <View style={{alignItems:'center', flex:1,zIndex:500, backgroundColor:"transparent", position:'absolute', bottom:210, left:-40}}>
                      <Image source={require('../../../assets/iconeDeNavegacao/bolinha.png')} style={{height:30,width:30}}></Image>
                  </View> 
                </TouchableOpacity >}
                <View style={{position:'absolute',zIndex:1000, alignItems: 'center'}}>
                  <TouchableOpacity style={{top:127}} onPress={()=>{navigateShopPage(camisa,calca, 2)}}  >
                    <Image style={styles.camisa} source={camisa?camisa.image:null}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{position:'absolute',zIndex:900, alignItems: 'center'}}>
                  <TouchableOpacity style={{top:280, left: 3}} onPress={()=>{navigateShopPage(camisa,calca, 3)}} >
                    <Image style={calca && calca.category===3?styles.calca:styles.short} source={calca?calca.image:null}></Image>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerView}>
              <View style={styles.footer}>
                <View >
                  {
                    atuallogo &&
                    <View style={styles.optionsLogo}>
                      <Image source={printPhotos(findLogo(atuallogo))} style={styles.logoStyle} resizeMode='contain'></Image>
                    </View>
                  }
                </View>
                <TouchableOpacity style={{justifyContent:'space-between'}} onPress={event => window.location.href='https://api.whatsapp.com/send?phone=5583987056658&text=Boa%20noite'}>
                  <View style={{flexDirection:'row',backgroundColor:"#0ACC0A",alignItems:'center',borderRadius:10,marginRight:20,justifyContent:'space-around'}}>
                    <Text style={{fontSize: 28, fontFamily:require('../../../assets/fonts/MazzardH-Bold.otf'), color: "#fff",padding:4 }}>COMPRAR</Text>
                    <Image source={require('../../../assets/iconeDeNavegacao/carrinhoDeCompras.png')} style={styles.compras} resizeMode='contain'/>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    );
}

