import React from 'react'
import { Text,  Image, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    const titulo = props.titulo || "Clique aqui!"
    const navegacao = props.navegacao

    return (
        <TouchableOpacity style={style.VoltarBtn} onPress={props => {navegacao.goBack()}} >
            <Text style={{fontSize: null, color: "white"}}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    VoltarBtn:{
        width: 36,
        height: 36,

        position: "absolute",
        top: 24,
        left: 24,

        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "white",
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
})
