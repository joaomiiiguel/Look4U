import React, { useState, useEffect } from "react"
import {
  Alert,
  Modal,
  Text,
  View,
  Image,
  Share
} from "react-native"
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler"
//import { saveAs } from 'file-saver'
import { getBase64, base64ToBlob } from '../../utils/imageConverter'
import { htmlToImage, montarHtml } from '../../services/html'
export default function modal (props) {
  
  const [modalVisible, setModalVisible] = useState(false)
  const corpo = require('../../../assets/corpo/corpoNu.png')

  async function downloadImage () {
    let imagens = {
      mascaraBase64: await getBase64(props.mascara),
      rostoBase64: props.rosto.uri,
      camisaBase64: props.camisa ? await getBase64(props.camisa.image) : null,
      corpoBase64: await getBase64(corpo)
    }
    if (props.calca) {
      if (props.calca.category === 3) imagens.calcaBase64 = await getBase64(props.calca.image)
      else imagens.shortBase64 = await getBase64(props.calca.image)
    }
    const html = montarHtml(imagens)
    const outputImage = await htmlToImage(html)
    saveAs(base64ToBlob(outputImage), 'suaImagem.png')
  }

  useEffect(()=>{
    props.save ? setModalVisible(true):setModalVisible(false)
  }, [props.save])

  function closeModal(){
      setModalVisible(false);
      props.setSave(false);
  }

  return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        style={{borderWidth:0, borderColor:'none'}}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
        }} >
      <TouchableOpacity style={{alignItems:'flex-end',padding:10,zIndex:120 }} onPress={closeModal}>
        <Text style={{color:"#3b2e86", fontSize: 16,fontWeight: "700"}}>Fechar</Text>
      </TouchableOpacity>
      <View style={styles.modalView} >
        {props.mascara && <Image source={props.mascara} style={styles.mascara} />}
        {props.rosto && <Image source={props.rosto.uri} style={styles.rosto} />}
        <Image source={corpo} resizeMode="contain" style={{width:150, height:220, zIndex:-400}}/>
        <View style={{position:'absolute',zIndex:100, alignItems: 'center'}}>
          <Image style={styles.camisa} source={props.camisa?props.camisa.image:null}></Image>
        </View>
        <View style={{position:'absolute',zIndex:60, alignItems: 'center'}}>
          <Image style={props.calca && props.calca.category===3?styles.calca:styles.short} source={props.calca?props.calca.image:null}/>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.modalOpt} onPress={downloadImage}>
          <FontAwesome name="download" size={20} color="#FFFFFFFF" ></FontAwesome>
          <Text style={styles.modalTxtOpt}>Salvar no celular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalOpt}>
              <FontAwesome name="share-alt" size={20} color="#FFFFFFFF" ></FontAwesome>
              <Text style={styles.modalTxtOpt}>Compartilhar</Text>
          </TouchableOpacity>
      </View>
    </Modal>
  )
}
