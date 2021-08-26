import React from 'react'
import { Pressable, Text,  StyleSheet } from 'react-native'

const ImgLogo = require('../images/oclean_logo.png');

export default ({ titulo }) => {

    return (
        <Pressable style={style.btn}>
            <Text style={style.titulo}>{titulo}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 18,
        color: "white"
    },
    btn: {
        width: "70%",
        height: "10%",
        marginTop: 40,
        marginBottom: 8,
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

        elevation: 23
    }
})