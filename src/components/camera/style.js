import { StyleSheet, Dimensions} from 'react-native';
const widthCamera = 240
const heightCamera = 340
const viewShot = 350
export default StyleSheet.create({
    button: {
        margin: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
      },
      viewShot: {
        alignItems:'center',
        width: viewShot,
        height: viewShot
      },
      mascara: {
       width: widthCamera + 10,
       height: heightCamera
      },
      camera: {
        position: 'absolute',
        zIndex: -50,
        width: widthCamera,
        height: heightCamera
      }
});
