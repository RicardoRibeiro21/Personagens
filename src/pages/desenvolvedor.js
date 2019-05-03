import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Desenvolvedor extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Text>Personagens</Text>
        )
      };
    constructor() {
        super();
        this.state = {
            Nome: "Ricardo Ribeiro",
            img: "../src/assets/img/perfil.png",
            idade: "18 anos"
        }
    }
    render() {
        return (
            <View>
                <Text>{this.state.Nome}</Text>
                <Image source={this.state.img} />
                <Text>{this.state.idade}</Text>
            </View>
        )
    }
}

export default Desenvolvedor;