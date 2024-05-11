import React, { useState } from 'react'
import { ScrollView, StyleSheet, StatusBar, Text, View, Image, TouchableOpacity, TouchableOpacityBase  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'
import Btn from '../components/Btn'
import CardComu from '../components/CardComu'
import Post from '../components/Post'

import moment from 'moment';
import "moment/min/locales";
import Ipt from '../components/Input'

moment.locale('pt-br');

export default  props => {

    const [pesquisa, setPesquisa] = useState('')
    const [resultado, setResultado] = useState(['Nada','Nada'])

    const pesquisar = async() => {
        try{
            const resResultados = await axios.post(`${server}/buscar`, {
                termo: pesquisa
            })
            console.log(resResultados.data)
            setResultado(resResultados.data)
        } catch(e) {
            showError(e)
        }
    }    

    const renderizarResultados = () => {
        if(resultado[0] == 'Nada' && resultado[1] == 'Nada'){
            console.log("A")
            return(<></>)
        }
        if(resultado[0].length != 0 || resultado[1].length !=0){

            const postagens = []
            for( var comunidade in resultado[0]){
                const comunidadeRenderizada = resultado[comunidade]
                postagens.push(
                    <CardComu key={comunidadeRenderizada[comunidade].id_comu + Math.random() * Math.random() / Math.random()} id_comu={comunidadeRenderizada[comunidade].id_comu} navigation={props.navigation} />
                )
            }

            for( var post in resultado[1]){
                const postRenderizado = resultado[1][post]
                
                const possuiImagem = false
                if(postRenderizado.foto_post != ""){
                    possuiImagem = true
                }

                console.log(postRenderizado)

                postagens.push(
                    <Post key={postRenderizado.id_post} 
                    post={postRenderizado}
                    possuiImagem={possuiImagem}
                    funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: postRenderizado.nome_comu})}
                    navigation={props.navigation}
                />
                )
            }

            return(<>
                { postagens }
            </>)
        } else {
            return(
                <View style={{marginTop: '20%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={style.IconePesquisa}>
                        <MaterialIcons name="search" size={40} color="white" />
                    </View>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#333333'}}>Não encontramos nada!</Text>
                    <Text style={{fontSize: 18, color: '#333333', textAlign: 'center'}}>Verifique a pesquise e tente novamente</Text>
                </View>)
        }
    }

    return(
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <View style={{width: '100%', height: 80,marginTop: StatusBar.currentHeight + 16}}>
                    <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={{ top: 50 }} 
                    />
                </View>
                <View style={{width: '80%', marginLeft: 16, flexDirection: 'row', alignSelf: 'flex-start'}}>
                    <Ipt placeholder="Pesquise algo aqui!" largura="90%" valor={pesquisa} setValor={setPesquisa}/>
                    <TouchableOpacity style={style.botaoPesquisar} onPress={pesquisar}>
                        <MaterialIcons name="search" size={24} color="#333333" />
                    </TouchableOpacity>
                </View>
                {renderizarResultados()}
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    botaoPesquisar: {
        backgroundColor: '#FEDB41',
        width: 50,
        height: 50,
        marginLeft: 16,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconePesquisa: {
        backgroundColor: '#FEDB41',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
