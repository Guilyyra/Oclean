import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, View, Text, TouchableOpacity  } from 'react-native'

//import axios from 'axios'
import axios from 'axios'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import Btn from '../components/Btn'
import Post from '../components/Post'
import VoltarBtn from '../components/VoltarBtn'

import moment from 'moment';
import "moment/min/locales";

moment.locale('pt-br');

import { server, showError } from '../comum'

export default props => {
    const ImgFundo = require('../img/desenho_praia.png')
    const ImgPerfil = require('../img/oclean_logo.png')

    const parametros = props.route.params
    const id = parametros.id_usu

    var [usu, setUsu] = useState("Carregando...")
    const [tab, setTab] = useState("posts")
    const [selecinado, setSelecionado] = useState("posts")

    const [posts, setPosts] = useState()

    const getUsuario = async () => {
        if(usu == "Carregando...") {
            try{
                const res = await axios.get(`${server}/usuarios/${id}`)
                // console.log(res.data)
                setUsu(res.data[0])    
            }catch(e){
                showError(e)
                res = { erro: "erro"}
            }
            try{
                const resPosts = await axios.get(`${server}/post/${id}/perfil`)
                // console.log(resPosts.data)
                const postsArray = new Array()
                for(const post in resPosts.data){
                    const postagens = resPosts.data[post]
                    postsArray.push(postagens)
                }
                setPosts(postsArray)
            }catch(e){
                console.log(e)
                showError(e)
                res = {erro: "erro"}
            }
        }
    }
    
    getUsuario()

    const renderizarPosts = () => {

        const postagens = []

        for( var postagem in posts){
            const postRenderizado = posts[postagem]
            const possuiImagem = false
            if(postRenderizado.foto_post != ""){
                possuiImagem = true
            }

            // const comunidade = await axios.get(`${server}/comunidades/id/${postRenderizado.id_comu}`)
            // console.log(comunidade)
            postagens.push(
                <Post 
                    key={postRenderizado.id_post} 
                    id_post={postRenderizado.id_post}
                    postTitulo={postRenderizado.titulo_post}
                    imgPost={{uri: postRenderizado.foto_post.replace(/"/g, "") }}
                    postDescricao={postRenderizado.descricao_post}
                    possuiImagem={possuiImagem}
                    nomeComunidade={postRenderizado.nome_comu}
                    funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: postRenderizado.nome_comu})}
                    nomeUsuario={usu.nome_usu}
                    tempoAtras ={moment.utc(postRenderizado.data_post).local().startOf('seconds').fromNow()}
                    navigation={props.navigation}
                />
            )
        }
        return(
            <View style={{alignItems: 'center'}}>
                { postagens }
            </View>
        )
    }

    return(
        // Quando adicionar mais coisas trocar a View por ScrollView
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Header navegacao={props.navigation} />
            <View>

                    <View style={{
                        borderBottomWidth: 2,
                        borderColor: '#d8d8d8',
                    }}>             
                        <Image 
                            source={ImgFundo} 
                            style={{ 
                                width: "100%", 
                                height: 130,  
                            }}
                            resizeMode="cover" />
                    </View>
                    
                    <View style={style.ContainerImgPerfil}>
                        <Image 
                            source={ImgPerfil} 
                            style={style.ImgPerfil}
                            resizeMode="cover" />
                    </View>

                    <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} 
                    />
                </View>
                <View style={style.ContainerDescricao}>
                    <View style={style.BotaoDescricao}>
                        <Btn  
                            titulo={"Editar"} 
                            funcaoPressionar={_ => toggleMembro()} 
                            tamanhoFonte={16} 
                            largura={120} 
                            altura={40}
                        />
                    </View>
                    <View style={style.TextoDescricao}>
                        <Text style={{fontSize: 24,}}>
                            {usu.nome_usu}
                        </Text>
                        <Text style={{fontSize: 16}}>
                            {usu.loc_usu}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: "rgba(51, 51, 51, 0.6)"
                            }}>
                        </Text>
                        <Text style={{fontSize: 13}}>
                            {usu.descricao_usu}
                        </Text>
                    </View>
                </View>
            <View style={style.TabContainer}>


                <TouchableOpacity style={{alignItems:'center'}} onPress={() =>{setTab("posts"); setSelecionado("posts")}}>
                    <Text>
                        Posts
                    </Text>
                    <View style={selecinado == "posts" ? { borderRadius: 100, height: 3, width: 16, backgroundColor: '#FEDB41'}: []}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}} onPress={() =>{setTab("eventos"); setSelecionado("eventos")}}>
                    <Text>
                        Eventos
                    </Text>
                    <View style={selecinado == "eventos" ? { borderRadius: 100,height: 3, width: 16, backgroundColor: '#FEDB41'}: []}></View>
                </TouchableOpacity>
            </View>
                {tab == "posts" ?  renderizarPosts() : []}
                {tab == "eventos" ? renderizarPosts()  : []}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    ContainerTextos: {
        marginLeft: '31%',
        paddingLeft: 32,
    },
    ContainerImgPerfil: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 3,
        borderColor: '#63E1FD',
        backgroundColor: 'white',
        position: 'absolute',
        left: 36,
        top: 70,
        borderRadius: 100,
    },
    BotaoDescricao: {
        marginLeft: 30, 
        marginTop: 60,
    },
    TextoDescricao: {
        paddingHorizontal: 16,
        width: '60%'
    },
    ImgPerfil: {
        width: "100%",
        height: "100%",        
    },
    ContainerDescricao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    }

})
