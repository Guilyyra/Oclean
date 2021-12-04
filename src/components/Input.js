import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default props => {

    const placeholder = props.placeholder || "Escreva aqui!"
    const texto = props.texto || ""
    const [provisorio, setProvisorio] = useState("Provisório")
    const valor = props.valor
    const setValor = props.setValor || setProvisorio

    const largura = props.largura || "70%"
    const altura = props.altura || 40
    const marginBottom = props.marginBottom || 16

    const escondido = props.escondido || false
    const tipoTeclado = props.tipoTeclado || "default"
    const multiline = props.multiline || false

    const funcaoPressionar = props.funcaoPressionar ? props.funcaoPressionar : _ => {}

    const medidas = {
        width: largura,
        height: altura,
        marginBottom: marginBottom
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
                onFocus = {() => {
                    setFocado(true)
                    funcaoPressionar()}}
                onBlur = {() => valor ? setFocado(true) : setFocado(false)}
                placeholderTextColor = "#C4C4C4"
                multiline = {multiline}
            >
            </TextInput>
        </>
    )
}

const style = StyleSheet.create({
    input:{
        width: "70%",
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
    inputFocado:{
        borderBottomColor: "red"
    }
})

