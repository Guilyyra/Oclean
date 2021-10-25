import React, { useState, useEffect } from 'react'
import { TextInput, StyleSheet, Keyboard } from 'react-native'

export default props => {

    const placeholder = props.placeholder || "Escreva aqui!"
    const [provisorio, setProvisorio] = useState("Provisório")
    const valor = props.valor || ""
    const setValor = props.setValor || setProvisorio

    const largura = props.largura || "70%"
    const altura = props.altura || 40
    const marginBottom = props.marginBottom || 16

    const multiline = props.multiline || false

    const funcaoPressionar = props.funcaoPressionar ? props.funcaoPressionar : _ => {}

    const [focado, setFocado] = useState(false) 
    

    // Colocar o input em cima do teclado
    

    const medidas = [{
        width: largura,
        height: altura,
        marginBottom: marginBottom
    }/*, teclado && focado ? {position: "absolute", bottom: Keyboard.} : {}*/]

    return (
        <>
            <TextInput
                style = {[style.input,medidas, {borderBottomColor: focado ? "#63E1FD" : "#C4C4C4"}]}
                placeholder = {placeholder}
                value = {valor}
                onChangeText = {input => {setValor(input)}}
                onFocus = {() => {
                    setFocado(true)
                    funcaoPressionar()
                }}
                onBlur = {() => valor ? setFocado(true) : setFocado(false)}
                placeholderTextColor = "#C4C4C4"
                multiline = {multiline}
            />
        </>
    )
}

const style = StyleSheet.create({
    input:{
        width: "70%",
        height: 40,
        borderRadius: 24,
        paddingLeft: 12,
        paddingRight: 12,

        backgroundColor: "white",
        elevation: 10
    },
    inputFocado:{
        borderBottomColor: "red"
    }
})

