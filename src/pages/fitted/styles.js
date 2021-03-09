import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

var { height, width } = Dimensions.get("window");
const fatoresCorpo = {
  rosto: 0.15,
  camisa: 0.275,
  calca: 0.3875,
  short: 0.1875
}
const fatoresHeigthWidth = {
  rosto: 0.5416666,
  camisa: 0.8364,
  calca: 0.423225,
  short : 0.9533333
}
const corpoHeight = 600
const rostoHeight = fatoresCorpo.rosto * corpoHeight
const rostoWidth = fatoresHeigthWidth.rosto * ( fatoresCorpo.rosto * corpoHeight )
const rostoPosition = 60
export default StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  },
  header:{
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight ,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width:width,
    height:50
  },
  baixar: {
    height: 25,
    width: 25,
  },
  opacityTrue:{
    opacity:0.14,
  },
  opacityFalse:{
  },
  voltar: {
    height: 25,
    width: 25,
  },
  logo:{
    width:75,
    height:75
  },
  optionBack:{
    alignItems:'center',
    flexDirection:"row",
    padding:10
  },
  camisa: {
    width: fatoresHeigthWidth.camisa * ( fatoresCorpo.camisa * corpoHeight ),
    height: fatoresCorpo.camisa * corpoHeight
  },
  calca:{
    width: fatoresHeigthWidth.calca * ( fatoresCorpo.calca * corpoHeight ),
    height: fatoresCorpo.calca * corpoHeight
  },
  short:{
    width: fatoresHeigthWidth.short * ( fatoresCorpo.short * corpoHeight ),
    height: fatoresCorpo.short * corpoHeight
  },
  footer:{
    width:400,
    flexDirection:"row",
    backgroundColor:"#CECECE",
    elevation:9,
    shadowOpacity:0.3,
    shadowRadius:40,
    shadowColor:"#111111",
    justifyContent:'space-between'
  },
  footerView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  optionsLogo: {
    zIndex:400,
    width:100,
    height:100,
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    marginLeft:40,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    bottom: 15
  },
  optLogo:{
    width:100,
    padding:10
  },
  optionDownload:{
    width:50,
    height:50,
    padding:10
  },
  compras:{
    padding:10,
    marginRight:10,
    width:30,
    height:30
  },
  logoStyle:{
    height:100,
    width:100
  },
  rosto:{
    position:'absolute',
    height:  rostoHeight,
    width: rostoWidth,
    borderRadius: 15,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingTop: 10,
    top: rostoPosition
  },
  mascara:{
    position:'absolute',
    height: rostoHeight,
    width: rostoWidth,    
    top: rostoPosition,
    zIndex: 500
  },
  viewCorpo:{
    alignItems: 'center',
  },
  modalStyle:{
    position:'absolute',
    zIndex:100,
    top: 150
  },
  botaoCamisa: {
    height: 20,
    width: 20,
    top: 200
  },
  bolinha: {
    height: 20,
    width: 20,
  },
  botaoCalcaTouch: {
    top: 500,
    marginLeft: 60,
    zIndex: 200
  }
})