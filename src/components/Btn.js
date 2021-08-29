import React from 'react'
import { Text,  Image, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    const titulo = props.titulo || "Clique aqui!"
    const largura = props.largura || "70%"
    const altura = props.altura || null
    const tamanhoTexto = props.tamanhoTexto || 24

    const medidas = {
        width: largura,
        height: altura
    }

    return (
        <TouchableOpacity style={[style.button,medidas]}>
            <Text style={{fontSize: tamanhoTexto, color: "white"}}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        padding: 5,
        marginTop: 24,
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

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
