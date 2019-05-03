import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

class Personagens extends Component() {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Text>Desenvolvedor</Text>
        )
      };
    constructor() {
        super();
        this.state = {
            listaPersonagens: []
        }
    }
    componentDidMount() {
        this.carregarPersonagens();
    }
    carregarPersonagens = async () => {
        const resposta = await api.get("/personagens");
        const dadosApi = resposta.data;
        this.setState({ listaPersonagens: dadosApi });
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.listaPersonagens}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem} />
            </View>
        )
    }
    renderItem() {
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.lancamento}</Text>
            {/* <Image>{item.urlImagem}</Image> */}
        </View>
    }
}
export default Personagens;