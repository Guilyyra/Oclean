import React from 'react'
import { Text,  Image, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    const titulo = props.titulo || "Clique aqui!"
    const navegacao = props.navegacao || ""
    const funcao = props.funcaoPressionar ? props.funcaoPressionar : _ => {if(navegacao) {navegacao.goBack()}}
    const top = props.top || 24

    const medidas = {
        top: top
    }

    return (
        <TouchableOpacity style={[style.VoltarBtn, medidas]} onPress={ props.funcao || funcao} >
            <Text style={{fontSize: null, color: "white"}}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    VoltarBtn:{
        width: 36,
        height: 36,

        position: "absolute",
        left: 24,

        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "white",
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.57,
        shadowRadius: 13,
        elevation: 20
    },
})
