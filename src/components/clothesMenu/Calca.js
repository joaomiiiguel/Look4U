import React, {Component} from 'react'
import {Text, View, TextInput, TouchableOpacity} from 'react-native'

export default class calca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:"",
        }
    }

    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>calca</Text>
            </View>
        );
    }
}