import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import axios from 'axios'

import estilo from '../components/estilo'
import Header from '../components/Header'
import Ipt from '../components/Input'
import Btn from '../components/Btn'
import VoltarBtn from '../components/VoltarBtn'

import { MaterialIcons } from '@expo/vector-icons'
import { server, showError } from '../comum'

const ImgFundo = require('../img/desenho_praia.png')



export default props => {

    const parametros = props.route.params
    const id = parametros.id_usu
    console.log(id)

    const cadastrar = async() => {
        try{
            await axios.post(`${server}/comunidades/cadastrar`, {
                nome_comu: nome,
                descricao_comu: descricao,
                id_ong: id
            })
            
            props.navigation.navigate("Home")
        } catch(erro) {
            switch(JSON.stringify(erro.response.data)){
                case '"Nome da comunidade já cadastrado!"':
                    setErroNome(erro.response.data)
                    break;
                default:
                    showError(erro)
            }
        }
    }

    const [nome, setNome] = useState("Comunidade das folhas")
    const [descricao, setDescricao] = useState("Para amantes da briza do mar 🌴🍃🍀🌵, da conversação, da botânica e outros...")
    const [erroNome, setErroNome] = useState("")

    return(
        <View style={[estilo.Flex1, {backgroundColor: "#F3F2F3",}]} >
            <Header navegacao={props.navigation}/>
            <Text style={style.titulo}>Criar Comunidade</Text>
            <View style={style.ContainerForm}>
                <Text style={style.TituloIpt}>Nome:</Text>
                <Ipt placeholder="Ex: Comunidade das Folhas" largura="100%"  marginBottom={1} valor={nome} setValor={setNome} />
                <Text style={[estilo.iptErro, {marginBottom: 16}]}>{erroNome}</Text>

                <Text style={style.TituloIpt}>Descrição:</Text>
                <Ipt 
                    multiline={true} placeholder="Ex: Para amantes da briza do mar 🌴🍃🍀🌵, da conversação, da botânica e outros..." 
                    largura="100%" 
                    altura={50} 
                    marginBottom={16}
                    valor={descricao}
                    setValor={setDescricao}/>

                <Text style={style.TituloIpt}>Adcionar Foto:</Text>
                <Image 
                    source={ImgFundo} 
                    style={{ 
                        width: "100%", 
                        height: 100,  
                        borderRadius: 8,
                        overflow: "hidden",
                        marginBottom: 16
                    }}
                    resizeMode="cover" />
                <View style={{justifyContent: "center", flexDirection: "row", marginBottom: 16}}>
                    <MaterialIcons style={{marginHorizontal: 16}} name="photo-camera" size={24} color="#333333" />
                    <MaterialIcons style={{marginHorizontal: 16}} name="insert-photo" size={24} color="#333333" />
                </View>
                <View style={{alignSelf: "center", width: "50%"}}>
                    <Btn 
                        titulo="Criar" 
                        largura="100%" 
                        marginVertical={8} 
                        funcaoPressionar={_ => cadastrar()} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 28,
        color: "#333333",
        alignSelf: "center",
        marginBottom: 26
    },
    ContainerForm: {
        paddingHorizontal: 16
    },
    TituloIpt: {
        fontSize: 18,
        color: "rgba(51, 51, 51, 0.6)"
    },
})