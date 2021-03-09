import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

var { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  header:{
    backgroundColor: '#3b2e86',
    paddingTop: Constants.statusBarHeight > 0 ? Constants.statusBarHeight + 10 : 20 ,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    height: height/35,
    width: width/2,

  }
})