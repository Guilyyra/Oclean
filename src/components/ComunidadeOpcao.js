import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Btn from './Btn'

import axios from 'axios'
import { server, showError } from '../comum'

export default props => {

    const botao = props.botao
    const funcaoBotao = props.funcaoBotao
    const comunidade = props.comunidade
    const comunidadeEscolhida = props.comunidadeEscolhida
    const [numeroMembros, setNumeroMembros] = useState(-1)

    const getNumeroMembros = async() => {
        if(numeroMembros == -1){
            try{
                const res = await axios.get(`${server}/comunidades/${comunidade.id_comu}/membros`)
                setNumeroMembros(res.data)
            } catch(e) {
                showError(e)
            }
        }
        //console.log(comunidadeEscolhida + " == " + comunidade.id_comu)
    }
    getNumeroMembros()

    const renderizarBotao = () => {
        const views = []
        if(botao && comunidadeEscolhida == comunidade.id_comu || comunidadeEscolhida == -1){
            views.push(
                <Btn 
                titulo="Essa!"
                tamanhoFonte={16} 
                largura={60} 
                altura={40}
                estilo={[style.btn, {backgroundColor: comunidadeEscolhida == comunidade.id_comu ? "#e00b0b" : "#63E1FD"}]}
                key={comunidade.id_comu}
                funcaoPressionar={_ => {
                    if(comunidadeEscolhida == comunidade.id_comu){
                        funcaoBotao(-1)
                    }else{
                        funcaoBotao(comunidade.id_comu)
                    }}}/>
            )
        }
        return(
            <>
                { views }
            </>
        )
    }

    return(
        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <View style={style.container}>
                    <Image 
                        source={{ uri: comunidade.foto_perfil_comu.replace(/"/g, "") }}
                        style={{
                            width: 60,
                            height: 60,
                            marginRight: 12, 
                            borderRadius: 100              
                        }}
                        resizeMode="cover"/>

                    <View style={{flexDirection: "column"}}>
                        <Text style={{fontWeight: "bold"}}>{comunidade.nome_comu}</Text>
                        <Text>{numeroMembros} {numeroMembros > 1 ? "membros" : "membro"}</Text>
                    </View>
            </View>
            { renderizarBotao() }
            {/*botao && <Btn 
                titulo="Esse!"
                tamanhoFonte={16} 
                largura={60} 
                altura={40}
                estilo={style.btn}
            funcaoPressionar={_ => funcaoBotao(comunidade.id_comu)}/>*/}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    }
})