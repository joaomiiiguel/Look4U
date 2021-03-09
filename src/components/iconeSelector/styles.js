import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
        marginBottom: 50
    },
    iconeView: {
        borderRadius:50,
        padding:6,
        marginHorizontal:10,
    },
    iconeUnselected: {
        backgroundColor:'white',
    },
    iconeSelected: {
        backgroundColor: '#332872'
    },
    iconeRosto: {
        height: 20,
        width: 20    
    },
    iconeRostoSelecionado: {
        height: 40,
        width: 40
    },
    centerView: {
        maxWidth: 400,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
