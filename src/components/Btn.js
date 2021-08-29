import React from 'react'
import { Text,  Image, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    const svg = props.svg || null
    const titulo = props.titulo || "Clique aqui!"
    const largura = props.largura || "70%"
    const altura = props.altura || null
    const tamanhoTexto = props.tamanhoTexto || 24
    const funcaoPressionar = props.funcaoPressionar || null
    const marginVertical = props.marginVertical || null

    const medidas = {
        width: largura,
        height: altura,
        marginVertical: marginVertical
    }

    return (
        <TouchableOpacity style={[style.btn,medidas]} onPress={funcaoPressionar} >
            <Text style={{position: "absolute", left: 16}}>{svg}</Text>
            <Text style={{fontSize: tamanhoTexto, color: "white"}}>{titulo}</Text>
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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,
            
    },
})
