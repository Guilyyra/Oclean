import React, { useState } from 'react'
import { StyleSheet, View, Text, StatusBar, Image, Keyboard } from 'react-native'

import ComunidadeOpcao from './ComunidadeOpcao'
import Btn from './Btn'

import axios from 'axios'
import { server, showError } from '../comum'

export default props => {

    const id_usu = props.id_usu
    const funcaoProximo = props.funcaoProximo
    const comunidadeEscolhida = props.comunidadeEscolhida
    const setComunidadeEscolhida = props.setComunidadeEscolhida
    const [comunidades, setComunidades] = useState(0)

    const getComunidades = async() => {
        try{
            const resConexoes = await axios.get(`${server}/usuarios/${id_usu}/conexoes`)
            var comunidades = new Array()
            for(var conexao in resConexoes.data){
                conexao = resConexoes.data[conexao]
                const comunidade = await axios.get(`${server}/comunidades/id/${conexao.id_comu}`)
                comunidades.push(comunidade.data[0])
            }
            setComunidades(comunidades)
        } catch(e) {
            showError(e)
        }
    }

    const renderizarComunidades = () => {
        getComunidades()

        const views = []

        for(var comunidade in comunidades){
            comunidade = comunidades[comunidade]
            views.push(
                <View key={comunidade.id_comu} style={{width: "85%",flexDirection: "row", alignItems: "center", marginBottom: 16}}>
                    <ComunidadeOpcao 
                        comunidade={comunidade} 
                        botao={true} 
                        funcaoBotao={setComunidadeEscolhida}
                        comunidadeEscolhida={comunidadeEscolhida} />
                </View>
            )
        }

        return (
            <>
                { views }
            </>
        )
    }

    const [erro, setErro] = useState("")

    const proximaTela = () => {
        if(comunidadeEscolhida == -1){
            setErro("Escolha uma comunidade!")
        }else{
            funcaoProximo()
        }
    }

    return(
        <View style={style.fundo}>
            <View style={{marginTop: "40%", marginLeft: 8, marginBottom: 64}}>
                <Text style={style.titulo}> Em qual comunidade você irá postar?</Text>
                <Text style={{fontSize: 14,alignSelf: "flex-start", marginBottom: 16}}> Escolha uma comunidade para postar!</Text>
                { renderizarComunidades() }
            </View>
            <Text style={{fontSize: 14, color: "#e00b0b"}}>{erro}</Text>
            <Btn  
                titulo="Próximo"
                tamanhoFonte={16} 
                largura={120} 
                altura={40}
                funcaoPressionar={_ => proximaTela()}/>
            
        </View>
    )
}

const style = StyleSheet.create({
    fundo:{
        width: "100%",
        height: "100%",
        top: StatusBar.currentHeight,
        alignItems: "center",

        backgroundColor: "#F3F2F3"
    },
    titulo: {
        fontSize: 18,
        color: "#333333",
        fontWeight: 'bold',
        alignSelf:"flex-start"
    }
})