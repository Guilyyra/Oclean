import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, View, Text, TouchableOpacity, RefreshControl  } from 'react-native'

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
    const ImgPlaceholder = `${server}/img/placeholder.png`
    const ImgUserPlaceholder = `${server}/img/user_placeholder.png`

    const parametros = props.route.params
    const id_usu = parametros.id_usu_perfil
    const id_param = parametros.id_usu

    var [usu, setUsu] = useState({
        foto_perfil: null,
        foto_banner: null,
        nasc_usu: '....',
        tipo_usu: 'carregando',
    })

    const [posts, setPosts] = useState([])

    const getUsuario = async () => {
            try{
                const res = await axios.get(`${server}/usuarios/${id_usu}`)
                // console.log(res.data)
                setUsu(res.data[0]) 

                const resPosts = await axios.get(`${server}/post/${id_usu}/perfil`)
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
    if(!usu.id_usu) {
        getUsuario()
    }

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
                    post={postRenderizado}
                    possuiImagem={possuiImagem}
                    funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: postRenderizado.nome_comu})}
                    navigation={props.navigation}
                />
            )
        }

        if(postagens.length == 0){
            postagens.push(<View key={1} style={{marginTop: 80, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: '#333333', fontWeight: 'bold'}}>O usuário ainda não postou nada!</Text>
                <Image
                    source={require('../img/cryp_sleep.png')} 
                    style={{
                        width: 160,
                        height: 120,
                        marginTop: 24,              
                    }}
                    resizeMode="cover"
                />
            </View>)
        }

        return(
            <View style={{alignItems: 'center'}}>
                { postagens }
            </View>
        )
    }

    const [refresh, setRefresh] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefresh(true);
        getUsuario().then(() => setRefresh(false));
    }, []);

    return(
        // Quando adicionar mais coisas trocar a View por ScrollView
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={onRefresh}
                />
            }>
            <Header navegacao={props.navigation} />
            <View>

                    <View style={{
                        borderBottomWidth: 2,
                        borderColor: '#d8d8d8',
                    }}>             
                        <Image 
                            source={!usu.foto_banner ? { uri: ImgPlaceholder} : { uri: usu.foto_banner.replace(/"/g, "")}} 
                            style={{ 
                                width: "100%", 
                                height: 130,  
                            }}
                            resizeMode="cover" />
                    </View>
                    
                    {props.route.params.Tela != "Perfil" ? <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} 
                    /> : []}

                    <View style={style.ContainerImgPerfil}>
                        <Image 
                            source={{ uri: !usu.foto_perfil ? ImgUserPlaceholder : usu.foto_perfil.replace(/"/g, "")}} 
                            style={style.ImgPerfil}
                            resizeMode="cover" />
                    </View>
                </View>
                <View style={style.ContainerDescricao}>
                    <View style={style.BotaoDescricao}>
                        {usu.id_usu == id_param && <Btn  
                            titulo={"Editar"} 
                            funcaoPressionar={_ => props.navigation.navigate("EditarUsuario", {usu: usu})} 
                            tamanhoFonte={16} 
                            largura={120} 
                            altura={40}
                        />}
                    </View>
                    <View style={style.TextoDescricao}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#333333'}}>
                            {usu.nome_usu}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, color: 'rgba(51, 51, 51, 0.6)'}}>
                                {usu.loc_usu} 
                            </Text>
                            {usu.tipo_usu == 'Pessoa' && <Text style={{marginLeft: 8,fontSize: 16, color: 'rgba(51, 51, 51, 0.6)'}}>
                                · {new Date().getFullYear() - parseInt(usu.nasc_usu.substring(0,4)) + " anos"}
                            </Text>}
                        </View>
                        <Text style={{fontSize: 13, color: '#333333'}}>
                            {usu.descricao_usu}
                        </Text>
                    </View>
                </View>
            <View style={style.TabContainer}>


                <TouchableOpacity style={{alignItems:'center'}}>
                    <Text>
                        Posts
                    </Text>
                    <View style={{ borderRadius: 100, height: 3, width: 16, backgroundColor: '#FEDB41'}}></View>
                </TouchableOpacity>
            </View>
                {posts != [] ? renderizarPosts() : []}
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
        marginLeft: -5,
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
        width: '60%'
    },
    ImgPerfil: {
        width: "100%",
        height: "100%",     
        borderRadius: 60   
    },
    ContainerDescricao: {
        marginLeft: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    }

})
