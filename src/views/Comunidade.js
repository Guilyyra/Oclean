import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'
import Post from '../components/Post'
import Evento from '../components/Mutirao'


import axios from 'axios'
import { server, showError } from '../comum'
import Btn from '../components/Btn'

export default props => {
    const ImgFundo = require('../img/desenho_praia.png')
    const nome = props.route.params.nome_comu
    const id_usu = props.route.params.id_usu

    var [comu, setComu] = useState({ 
        nome_comu: "Carregando...", 
        banner_comu: `${server}/img/lucas.jpg`,
        foto_perfil_comu: `${server}/img/lucas.jpg`,
        descricao_comu: "Carregando..."
    })
    
    const [ingresso, setIngresso] = useState(false)
    const [membros, setMembros] = useState(0)
    
    const getComunidade = async () => {
        if(comu.nome_comu == 'Carregando...'){
            try{
                const res = await axios.get(`${server}/comunidades/${nome.replace(/ /g, "%20")}`)
                setComu(res.data[0])

                numeroMembros(res.data[0].id_comu)

                const conexao = await axios.post(`${server}/comunidades/membro/verificar`, {
                    id_usu: id_usu,
                    id_comu: res.data[0].id_comu
                })

                if(JSON.stringify(conexao.data[0])){
                    setIngresso(true)
                }

            } catch(e) {
                showError(e)
            }
        }
    }
    getComunidade()

    const numeroMembros = async (id_comu) => {
        const numeroMembros = await axios.get(`${server}/comunidades/${id_comu}/membros`)
        setMembros(numeroMembros.data)
    }

    const toggleMembro = async () => {
        if(ingresso){
            // sair da comunidade
            try{
                const res = await axios.delete(`${server}/comunidades/sair`, {
                    data: {
                        id_usu: id_usu,
                        id_comu: comu.id_comu
                    }
                })

                setIngresso(false)
            } catch(e) {
                showError(e)
            }
        } else{
            // entrar na comunidade
            try{
                const res = await axios.post(`${server}/comunidades/entrar`, {
                    id_usu: id_usu,
                    id_comu: comu.id_comu
                })

                setIngresso(true)
            } catch(e) {
                showError(e)
            }
        }
        numeroMembros(comu.id_comu)
    }

    const [tab, setTab] = useState("posts")
    const [selecinado, setSelecionado] = useState("posts")
    const PostAdd = _ => {

        return(
                <View style ={{ marginVertical: 16,  alignItems:'center', flex: 1}}>
                    <Post postTitulo="Minha história" postDescricao="Hoje eu estava passeando e encontrei um cachorro, pe..." />
                    <Post postTitulo="Minha história" postDescricao="Hoje eu estava passeando e encontrei um cachorro, pe..." />
                    <Post postTitulo="Minha história" postDescricao="Hoje eu estava passeando e encontrei um cachorro, pe..." />
                    <Post postTitulo="Minha história" postDescricao="Hoje eu estava passeando e encontrei um cachorro, pe..." />
                </View>
        )
    }
    const EventoAdd = _ => {
        return(
            <View style={{ marginVertical: 16, alignItems:'center', flex: 1}}>
                    <Evento />
                    <Evento realizado={true}/>
            </View>
        )
    }

    return(
        <>
        <ScrollView>
            <Header navegacao={props.navigation} />
            <SafeAreaView style={[estilo.Flex1, {backgroundColor: '#f3f4f3'}]}>
                <View>

                    <View style={{
                        borderBottomWidth: 2,
                        borderColor: '#d8d8d8',
                    }}>             
                        <Image 
                            source={{ uri: comu.banner_comu.replace(/"/g, "")}} 
                            style={{ 
                                width: "100%", 
                                height: 130,  
                            }}
                            resizeMode="cover" />
                    </View>
                    
                    <View style={style.ContainerImgPerfil}>
                        <Image 
                            source={{ uri: comu.foto_perfil_comu.replace(/"/g, "")}} 
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
                            titulo={ingresso ? "Membro" : "Entrar"} 
                            funcaoPressionar={_ => toggleMembro()} 
                            tamanhoFonte={16} 
                            largura={120} 
                            altura={40}
                            desativado={id_usu == comu.id_ong ? true : false}/>
                    </View>
                    <View style={style.TextoDescricao}>
                        <Text style={{fontSize: 24,}}>
                            {comu.nome_comu}
                        </Text>
                        <Text style={{fontSize: 16}}>
                            Criado por ONG Route
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: "rgba(51, 51, 51, 0.6)"
                            }}>
                            {membros} {membros > 1 ? "membros" : "membro"}
                        </Text>
                        <Text style={{fontSize: 13}}>
                            {comu.descricao_comu}
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
                {tab == "posts" ? PostAdd() : []}
                {tab == "eventos" ? EventoAdd() : []}
            </SafeAreaView>
        </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
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
    ImgPerfil: {
        width: '100%',
        height: '100%',     
        borderRadius: 100,
    },
    ContainerDescricao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BotaoDescricao: {
        marginLeft: 30, 
        marginTop: 60,
    },
    TextoDescricao: {
        paddingHorizontal: 16,
        width: '60%'
    },
    TabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    }
})