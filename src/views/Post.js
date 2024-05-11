import React, { useState } from 'react'
import { ScrollView, StyleSheet, StatusBar, Text, View, Image, TouchableOpacity  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'
import Btn from '../components/Btn'

import moment from 'moment';
import "moment/min/locales";

moment.locale('pt-br');

export default  props => {
    const id_usu_param = props.route.params.id_usu
    const id_post = props.route.params.id_post
    const ImgUserPlaceholder = `${server}/img/user_placeholder.png`
    
    const [post, setPost] = useState({
        titulo_post: 'Carregando...',
        descricao_psot: 'Carregando...',
        foto_post: ''
    })
    const [usu, setUsu] = useState({
        nome_usu: 'Carregando...',
        foto_perfil: ''
    })
    const [comu, setComu] = useState({
        nome_comu: 'Carregando...',
        id_ong: -1
    })

    const getPost = async() => {
        try{
            const resPost = await axios.get(`${server}/post/${id_post}`)
            setPost(resPost.data[0])
            const resUsu = await axios.get(`${server}/usuarios/${resPost.data[0].id_usu}`)
            setUsu(resUsu.data[0])
            const resComu = await axios.get(`${server}/comunidades/id/${resPost.data[0].id_comu}`)
            setComu(resComu.data[0])
            novaMedida(resPost.data[0].foto_post.replace(/"/g, ""))
        } catch(e) {
            console.log(e)
        }
    }
    if(!post.id_post && !usu.id_usu && !comu.id_comu){
        getPost()
    }

    const [fotoLargura, setFotoLargura] = useState("100%")
    const [radius, setRadius] = useState(100)

    const novaMedida = (url) => {
        if(url != ''){
            Image.getSize(url, (width, height) => {
                const largura = width
                const altura = height
                const novaAltura = 400
                const novaLargura = novaAltura / (altura/largura) 
                setFotoLargura(novaLargura)
                setRadius(novaLargura < 500 ? novaLargura / 8 : novaLargura / 60)
            })
        }
    }

    return(
        <>
            <ScrollView>
                <Header navegacao={props.navigation} />
                <VoltarBtn 
                    titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                    navegacao={props.navigation}
                    style={style.voltarBtn}
                    top={StatusBar.currentHeight + 80} />
                <View style={style.UsuarioContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Perfil", {id_usu_perfil: post.id_usu})}>
                        <Image 
                            source={{ uri: !usu.foto_perfil ? ImgUserPlaceholder : usu.foto_perfil.replace(/"/g, "")}}
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 12,         
                                borderRadius: 40      
                        }} />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column'}}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Perfil", {id_usu_perfil: post.id_usu})}>
                            <Text style={{fontSize: 18, color: '#333333'}}>{usu.nome_usu}</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 14, color: 'rgba(51, 51, 51, 0.75)'}}>{comu.nome_comu}</Text>
                        <Text style={{fontSize: 14, color: 'rgba(51, 51, 51, 0.75)'}}>{moment.utc(post.data_post).local().startOf('seconds').fromNow()}</Text>
                    </View>
                </View>
                <Text style={style.postTitulo}>{post.titulo_post}</Text>
                <Text style={style.postDesc}>{post.descricao_post}</Text>
                {post.foto_post.replace(/"/g, "") != '' &&<Image 
                    source={{uri: post.foto_post.replace(/"/g, "")}}
                    style={{
                        maxWidth: "80%",
                        width: fotoLargura,
                        height: 400,
                        marginTop: 24,
                        marginBottom: 16,
                        borderRadius: radius,
                        alignSelf: 'center'
                    }}
                    resizeMode="contain" />}
                {comu.id_ong == id_usu_param || post.id_usu == id_usu_param ?
                    <Btn estilo={style.btnDeletar} titulo="Deletar Post" tamanhoFonte={20} funcaoPressionar={async () => {
                        deletar = await axios.delete(`${server}/post/${post.id_post}/deletar`)
                        props.navigation.goBack()
                    }} /> : []}
            </ScrollView>
        </>
    )
}
const style = StyleSheet.create({
    voltarBtn: {
        marginTop: 200
    },
    UsuarioContainer: {
        marginLeft: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    postTitulo: {
        fontSize: 24, 
        marginLeft: 24,
        marginTop: 24,
        marginRight: 24,
        fontWeight: 'bold',
        color: '#333333'
    },
    postDesc: {
        fontSize: 18, 
        marginLeft: 24,
        marginTop: 12,
        marginRight: 18,
        color: '#333333'
    },
    btnDeletar: {
        height: 40,
        width: "55%",
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 24,

        backgroundColor: "#e00b0b"
    }
})
