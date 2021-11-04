import React from 'react'
import { Image, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Estilo from './estilo'
import { MaterialIcons } from '@expo/vector-icons'

export default props => {
    const ImgPerfil = require('../img/oclean_logo.png')
    const possuiImagem = props.possuiImagem || false
    // Ao utilizar o post.js, o imgPost vai ter que ser um require("url_da_img")
    const imgPost = props.imgPost || ""
    const postTitulo = props.postTitulo || ""
    const postDescricao = props.postDescricao || ""
    const nomeComunidade = props.nomeComunidade
    const largura = 30
    const altura = 30
    const funcaoPressionar = props.funcaoPressionar || null
    const nomeUsuario = props.nomeUsuario
    const tempoAtras = props.tempoAtras

    function imagem() {
        if(possuiImagem){
            return (
                <View style={style.postcontainerImagem}>
                    <Image 
                        style={style.postImagem}
                        source={imgPost}
                        />
                </View>
            )
        }
    }


    function descricao(){
        if(postDescricao){
            return (
                <Text style={{
                    fontSize: 14,
                    color: "rgba(51, 51, 51, 0.8)",
                    marginTop: 8}}>
                    {postDescricao}
                </Text>
            )
        }
    }

    return(
        <View style={style.postContainer}>
            <View style={style.InformacoesUsuarioContainer}>
                <Image 
                    source={ImgPerfil}
                    style={{
                        width: largura,
                        height: altura,
                        marginRight: 12,               
                    }}
                    resizeMode="cover"
                />
                <Text style={{color: '#333333', fontWeight: '300', fontSize: 13, marginLeft: 8}}>{nomeUsuario} - </Text>
                <TouchableOpacity onPress={funcaoPressionar}>
                    <Text style={{color: '#333333', fontWeight: '300', fontSize: 13, marginLeft: 0}}>{nomeComunidade} </Text>
                </TouchableOpacity>   
                <Text style={{color: 'rgba(51, 51, 51, 0.75)', fontWeight: '300', fontSize: 13, marginRight: 0}}> · {tempoAtras}</Text>      
  
            </View>
            <View style={style.postContainerConteudo}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>{postTitulo}</Text>
                {descricao()}
            </View>
            {imagem()}
            <View style={style.postContainerCurtidas}>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                    <MaterialIcons style={{ marginRight: 8}}name="thumb-up" size={24} color="#333333" />
                    <Text>18</Text>
                </View>
                <MaterialIcons name="share" size={24} color="#333333" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    postContainer: {
        width: "90%",
        height: "auto",
        marginBottom: 40,

        backgroundColor: "white",
        borderRadius: 16,

        elevation: 7
    },
    postcontainerImagem: {
        height: 240,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
    },
    postImagem: {
        width: "80%",
        height: 240,
        borderRadius: 16,
    },
    InformacoesUsuarioContainer: {
        flexDirection: "row",
        paddingLeft: 16,
        paddingTop: 16,
        alignItems: "center",
    },
    postContainerConteudo: {
        width: "80%",
        marginHorizontal: "10%",
        marginVertical: 16,

        textAlign: "center"
    },
    postContainerCurtidas: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        marginBottom: 16
    }
})