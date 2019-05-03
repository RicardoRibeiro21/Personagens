import React, {Component } from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
class Desenvolvedor extends Component{
    constructor(){
        super();
        this.state = {
            Nome: "Ricardo Ribeiro",
            img: "../src/assets/img/perfil.png",
            idade: "18 anos"
        }
    }
    render(){
        return(
            <View>
                <Text>{this.state.Nome}</Text>
                <Image src={this.state.img} />
                <Text>{this.state.idade}</Text>
            </View>
        )
    }
}