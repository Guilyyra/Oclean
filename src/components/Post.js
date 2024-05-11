import React, { useState } from 'react'
import { Image, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import Estilo from './estilo'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import moment from 'moment';
import "moment/min/locales";

moment.locale('pt-br');

export default props => {
    const ImgUserPlaceholder = `${server}/img/user_placeholder.png`
    const possuiImagem = props.possuiImagem || false
    const post = props.post
    const funcaoPressionar = props.funcaoPressionar || null
    const tempoAtras = moment.utc(post.data_post).local().startOf('seconds').fromNow()
    const navigation = props.navigation

    const [usu, setUsu] = useState({
        foto_perfil: '',
    })

    const getUsuario = async() => {
        try{
            const resUsu = await axios.get(`${server}/usuarios/${post.id_usu}`)
            setUsu(resUsu.data[0])
        } catch(e) {
            showError(e)
        }
    }
    if(!usu.id_usu){
        getUsuario()
    }

    function imagem() {
        if(possuiImagem){
            return (
                <View style={style.postcontainerImagem}>
                    <Image 
                        style={style.postImagem}
                        source={{ uri: post.foto_post.replace(/"/g, "")}}
                        />
                </View>
            )
        }
    }

    function descricao(){
        if(post.descricao_post){
            return (
                <Text style={{
                    fontSize: 14,
                    color: "rgba(51, 51, 51, 0.8)",
                    marginTop: 8}}>
                    {post.descricao_post.length < 150 ?
                        post.descricao_post
                    :
                        post.descricao_post.subString(0,147) + '...'}
                </Text>
            )
        }
    }

    return(
        <TouchableOpacity style={style.postContainer} onPress={() => navigation.navigate("Post", { id_post: post.id_post})}>
            <View style={style.InformacoesUsuarioContainer}>
                <Image 
                    source={{ uri: !usu.foto_perfil ? ImgUserPlaceholder : usu.foto_perfil.replace(/"/g, "")}}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 0,
                        borderRadius: 15     
                    }}
                    resizeMode="cover"
                />
                <View style={{marginLeft: 8}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Perfil", {id_usu_perfil: usu.id_usu})}>
                            <Text style={{color: '#333333', fontWeight: '300', fontSize: 13}}>{
                                post.nome_usu.length < 20 ?
                                    post.nome_usu
                                :
                                    post.nome_usu.substring(0,20) + "..."} - </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={funcaoPressionar}>
                            <Text style={{color: '#333333', fontWeight: '300', fontSize: 13, marginLeft: 0}}>{
                                post.nome_comu.length < 30 ?
                                    post.nome_comu
                                :
                                    post.nome_comu.substring(0,30) + "..."}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color: 'rgba(51, 51, 51, 0.75)', fontWeight: '300', fontSize: 13}}>{tempoAtras}</Text>  
                </View>    
  
            </View>
            <View style={style.postContainerConteudo}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>{post.titulo_post}</Text>
                {descricao()}
            </View>
            {imagem()}
        </TouchableOpacity>
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
        flexDirection: 'row',
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