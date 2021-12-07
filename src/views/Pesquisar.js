import React, { useState } from 'react'
import { ScrollView, StyleSheet, StatusBar, Text, View, Image, TouchableOpacity  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'
import Btn from '../components/Btn'

import moment from 'moment';
import "moment/min/locales";
import Ipt from '../components/Input'

moment.locale('pt-br');

export default  props => {

    const [pesquisa, setPesquisa] = useState('')

    return(
        <View style={{width: '60%', marginLeft: 16, marginTop: StatusBar.currentHeight + 16}}>
            <Ipt placeholder="ONG Exemplo" largura="100%" valor={pesquisa} setValor={setPesquisa}/>
        </View>
    )
}
const style = StyleSheet.create({
    voltarBtn: {
        marginTop: 200
    },
    UsuarioContainer: {
        marginLeft: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    postTitulo: {
        fontSize: 24, 
        marginLeft: 24,
        marginTop: 24,
        marginRight: 24,
        fontWeight: 'bold',
        color: '#333333'
    },
    postDesc: {
        fontSize: 18, 
        marginLeft: 24,
        marginTop: 12,
        marginRight: 18,
        color: '#333333'
    },
    btnDeletar: {
        height: 40,
        width: "55%",
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 24,

        backgroundColor: "#e00b0b"
    }
})
