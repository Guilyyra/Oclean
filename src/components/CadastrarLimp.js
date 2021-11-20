import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import VoltarBtn from './VoltarBtn'
import estilo from './estilo'
import BtnImg from './BtnImg'
import IptFundo from './InputFundo'
import Btn from './Btn'
import { uploadFoto } from '../components/imgComum'

export default props => {
    return(
        <View style={style.fundo}>
            <View style={style.container}>
                <Text>EDITAR A SINALIZAÇÂO PARA A LIMPEZA</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    fundo:{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        alignContent: "center",

        backgroundColor: "rgba(51, 51, 51, 0.5)",

        elevation: 19
    },
    container: {
        width: "60%",

        marginLeft: "20%",
        backgroundColor: "white"
    }
})