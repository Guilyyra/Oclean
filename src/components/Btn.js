import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'


export default props => {
    /*  somenteText - Modifica a interface do Botão, mudando a cor de fundo, texto, etc
        somenteSvg - Retira o Text, para botões que possuem apenas svg,
        impedindo que o <Text> atrapalhe na formatação */
    const somenteSvg = props.somenteSvg || false
    const svg = props.svg || null
    const svgEsquerda = props.svgEsquerda || 0
    const svgAlignSelf = props.svgAlignSelf || null
    const titulo = props.titulo || ""
    const largura = props.largura || "70%"
    const altura = props.altura || "auto"
    const tamanhoFonte = props.tamanhoFonte || 24
    const corFonte = props.corFonte || "white"
    const funcaoPressionar = props.funcaoPressionar || null
    const marginVertical = props.marginVertical || null
    const marginHorizontal = props.marginHorizontal || null
    const somenteTexto = props.somenteTexto || false
    const borderRadius = props.borderRadius || 10
    const estilo = props.estilo || {}
    const desativado = props.desativado || false

    const medidas = [{
        width: largura,
        height: altura,
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
        borderRadius: borderRadius
    },estilo]

    const checarSvg = () => {
        if(!somenteSvg){
            return (
                <Text 
                    style={[{fontSize: tamanhoFonte}, 
                    somenteTexto  ? {color: "#63E1FD"} : {color: corFonte}]}>
                        {titulo}
                </Text>
            )
        }
    }
    return (
        <TouchableOpacity disabled={desativado} style={[somenteTexto ? style.btnTexto : style.btn,medidas ]} onPress={funcaoPressionar} >
            {svg && 
                <Text 
                    style={[{ alignSelf: svgAlignSelf, marginLeft: svgEsquerda }, !somenteSvg ? {position: "absolute"} : {} ]}>
                {svg}</Text>}
            {checarSvg()}
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btn: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#63E1FD",
        
        elevation: 8,
            
    },
    btnTexto: {
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
    }
})
