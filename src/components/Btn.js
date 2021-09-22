import React from 'react'
import { Text,  Image, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    /*  somenteText - Modifica a interface do Botão, mudando a cor de fundo, texto, etc
        somenteSvg - Retira o Text, para botões que possuem apenas svg,
        impedindo que o <Text> atrapalhe na formatação */
    const somenteSvg = props.somenteSvg || false
    const svg = props.svg || null
    const svgEsquerda = props.svgEsquerda || 0
    const titulo = props.titulo || ""
    const largura = props.largura || "70%"
    const altura = props.altura || null
    const tamanhoFonte = props.tamanhoFonte || 24
    const funcaoPressionar = props.funcaoPressionar || null
    const marginVertical = props.marginVertical || null
    const somenteTexto = props.somenteTexto || false

    const medidas = {
        width: largura,
        height: altura,
        marginVertical: marginVertical
    }

    const checarSvg = () => {
        if(!somenteSvg){
            return (
                <Text 
                    style={[{fontSize: tamanhoFonte}, 
                    somenteTexto ? {color: "#63E1FD"} : {color: "white"}]}>
                        {titulo}
                </Text>
            )
        }
    }
    return (
        <TouchableOpacity style={[somenteTexto ? style.btnTexto : style.btn,medidas]} onPress={funcaoPressionar} >
            <Text style={{position: "absolute", left: svgEsquerda }}>{svg}</Text>
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
        borderRadius: 10,
        
        elevation: 8,
            
    },
    btnTexto: {
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
    }
})
