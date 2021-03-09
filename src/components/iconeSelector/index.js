import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import icones from '../../../assets/api/iconeApi'
export default function iconeSelector(props){
  const [selecionado, setSelecionado] = useState(0);
  useEffect(() => {
    setSelecionado(0);
    props.seleciona(0);
  }, [])
  async function selecionaRosto(index){
    setSelecionado(index);
    props.seleciona(index);
  }
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <TouchableOpacity onPress={() => selecionaRosto(0) } style={[selecionado === 0 ? styles.iconeSelected : styles.iconeUnselected, styles.marginLeft, styles.iconeView]} >
          <Image source={selecionado === 0 ? icones[0].selecionado : icones[0].apagado} style={ selecionado === 0 ? styles.iconeRostoSelecionado : styles.iconeRosto} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => selecionaRosto(1) } style={[selecionado === 1 ? styles.iconeSelected : styles.iconeUnselected, styles.iconeView]} >
          <Image source={selecionado === 1 ? icones[1].selecionado : icones[1].apagado} style={ selecionado === 1 ? styles.iconeRostoSelecionado : styles.iconeRosto} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => selecionaRosto(2) } style={[selecionado === 2 ? styles.iconeSelected : styles.iconeUnselected, styles.iconeView]} >
          <Image source={selecionado === 2 ? icones[2].selecionado : icones[2].apagado} style={ selecionado === 2 ? styles.iconeRostoSelecionado : styles.iconeRosto} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => selecionaRosto(3) } style={[selecionado === 3 ? styles.iconeSelected : styles.iconeUnselected, styles.iconeView]} >
          <Image source={selecionado === 3 ? icones[3].selecionado : icones[3].apagado} style={ selecionado === 3 ? styles.iconeRostoSelecionado : styles.iconeRosto} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerView}>
        <TouchableOpacity onPress={() => selecionaRosto(4) } style={[selecionado === 4 ? styles.iconeSelected : styles.iconeUnselected, styles.marginLeft, styles.iconeView]} >
          <Image source={selecionado === 4 ? icones[4].selecionado : icones[4].apagado} style={ selecionado === 4 ? styles.iconeRostoSelecionado : styles.iconeRosto} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => selecionaRosto(5) } style={[selecionado === 5 ? styles.iconeSelected : styles.iconeUnselected, styles.iconeView]} >
          <Image source={selecionado === 5 ? icones[5].selecionado : icones[5].apagado} style={ selecionado === 5 ? styles.iconeRostoSelecionado : styles.iconeRosto} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => selecionaRosto(6) } style={[selecionado === 6 ? styles.iconeSelected : styles.iconeUnselected, styles.iconeView]} >
          <Image source={selecionado === 6 ? icones[5].selecionado : icones[5].apagado} style={ selecionado === 6 ? styles.iconeRostoSelecionado : styles.iconeRosto} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
