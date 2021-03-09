import { StyleSheet,Dimensions } from 'react-native';
import Constants from 'expo-constants';
var { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent'
    },

    containerPage: {
      flex:0.9,
      height:700
    },

    leftTab: {
      width:width/5,
      flexDirection: 'column',
      backgroundColor: '#3B2E86',
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
      marginTop: height/20,
    },

    option: {
      alignItems:'center'
    },

    optionsLogo: {
      width: width/5,
      zIndex:400,
      height: height/9,
      alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,
      marginVertical: 10,
      marginBottom: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginLeft: 15,
      paddingLeft: 6,
      paddingRight: 6
    },

    camisa: {
      width: width/5,
      height: height/8, 
      padding: 4,
      marginVertical: 4,
      },

    logo: {
      width: width/5.4,
      height: height/9,
      },

    calca: {
      width: width/8,
      height: height/8,
      padding: 4,
      marginVertical: 4,
    },

    short: {
      width: width/8,
      height: height/9,
      padding: 4,
      marginVertical: 4,
    },

    textMenu: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold'
      },

    pressioned: {
      width: width/4.6,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      paddingLeft: 6,
      paddingRight: 6,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,
      marginVertical: 10,
      marginBottom: 10,
      alignItems:'center',
      backgroundColor: '#F03D58',
    },

    divClothes:{
      width:width*11/37,
      padding:10,
      borderRadius:10,
      marginTop:30,
      marginBottom:10,
      alignItems:'center',
      marginLeft:10,
      shadowOpacity:0.3,
      shadowRadius:width/28,
      backgroundColor:'#fff',
    },

    imageClothes:{
      width:width/4.1,
      height:height/6.4,
      backgroundColor:'transparent',
      },

    footer:{
      zIndex:100,
      flex:0.1,
      backgroundColor: 'transparent',
      width:width,
      height:60,
      alignItems: 'center',
      elevation:8,
      shadowOpacity:0.3,
      shadowRadius:50,
      },

    selectedEffect:{
      width:width*11/37,
      padding:10,
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      marginTop:30,
      alignItems:'center',
      marginLeft:8,
      shadowOpacity:0.3,
      shadowRadius:width/28,
      backgroundColor:'#fff',
      borderWidth:12,
      borderColor:"#3B2E86"
    },

    containerClothes:{
      flexDirection:'column',
      alignItems: 'center',
    },

    footerItem:{
        width:width*11/37,
        backgroundColor:"#F03D58",
        marginLeft:8,
        alignItems:'center'
    }
});