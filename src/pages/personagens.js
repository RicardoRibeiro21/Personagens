import React,  {Component } from 'react';
import { Text, StyleSheet, Image, FlatList} from 'react-native';

class Personagens extends Component(){
    constructor(){
        super();
        this.state = {
            listaPersonagens: []
        }
    }
    componentDidMounth(){
        this.carregarPersonagens();
    }
    carregarPersonagens = async () => {
        const resposta = await api.get("/");
        const dadosApi = resposta.data;
        this.setState({listaPersonagens :  dadosApi});
    }
    render(){
        return(
            <View>
                <FlatList 
                data={this.state.listaPersonagens}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}/>
            </View>
        )
    }
    renderItem(){
        <View>
            <Text>{item.Titulo}</Text>
            <Image>{item.acao}</Image>
        </View>
    }
}