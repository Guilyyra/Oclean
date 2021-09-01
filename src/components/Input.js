import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

import estilo from './estilo';

export default props => {

    const placeholder = props.placeholder || "Escreva aqui!"
    const texto = props.texto || ""
    const [valor, setValor] = useState(texto)

    const largura = props.largura || "70%"
    const altura = props.altura || 40

    const escondido = props.escondido || false
    const tipoTeclado = props.tipoTeclado || "default"

    const medidas = {
        width: largura,
        height: altura,
    }

    const [focado, setFocado] = useState(false) 

    return (
        <>
            <TextInput
                style = {[style.input,medidas, {borderBottomColor: focado ? "#63E1FD" : "#C4C4C4"}]}
                placeholder = {placeholder}
                value = {valor}
                onChangeText = {input => {setValor(input)}}
                secureTextEntry = {escondido}
                keyboardType = {tipoTeclado}
                onFocus = {() => setFocado(true)}
                onBlur = {() => valor ? setFocado(true) : setFocado(false)}
                placeholderTextColor = "#C4C4C4"
            />
        </>
    )
}

const style = StyleSheet.create({
    input:{
        width: "70%",
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 16,
    },
    inputFocado:{
        borderBottomColor: "red"
    }
})

