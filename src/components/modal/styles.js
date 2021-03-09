import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: '#f2f2f2',
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 20,
            height: 50,
        },
        shadowOpacity: 0.98,
        shadowRadius: 2000.00,
        width:200,
        height:320,
        borderRadius:20
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        padding:10,
        zIndex:100
    },
    modalOpt:{
        flexDirection:'column',
        alignItems:'center',
        padding:10,
        zIndex:100
    },
    modalTxtOpt:{
        fontSize:12,
        color:"#FFFFFFFF",
        zIndex:100,
        fontWeight: "700"
    },
    calca:{
        height: 110,
        width: 45,
        top: 100,
        marginLeft: 3
    },
    short:{
        height:50,
        width:50,
        top: 100,
        marginLeft: 3
    },
    rosto:{
        position:'absolute',
        height: 40,
        width: 20,
        borderRadius: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingTop: 10,
        top: 40,
        marginLeft: 2
    },
    mascara:{
        position:'absolute',
        height:40,
        width: 20,
        marginLeft: 2,
        top: 40,
        zIndex: 500
      },
    camisa:{
        height: 80,
        width: 62,
        top: 35,
        left: 0
    }
});
