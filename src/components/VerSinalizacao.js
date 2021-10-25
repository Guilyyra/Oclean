import React, { useState, useEffect } from 'react'
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

    const funcaoVoltar = props.funcaoVoltar || null
    const [sinalizacao, setSinalizacao] = useState({
        foto_sin: `${server}/img/lucas.jpg`,
        praia_sin: "",
        cidade_sin: "",
        ref_sin: ""
    })

    const getSinalizacao = async () => {
        if(sinalizacao.foto_sin == `${server}/img/lucas.jpg`){
            try{
                    const sinalizacoes = await axios.get(`${server}/sinalizacao`)
                    setSinalizacao(sinalizacoes.data[0])
            }catch(erro){
                console.log(erro)
            }
        }
    }
    getSinalizacao()

    return(
        <View style={style.fundo}>
            <View style={style.Container}>
                <VoltarBtn 
                    titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                    style={estilo.VoltarBtn}
                    funcaoPressionar={funcaoVoltar} />
                <Text style={style.titulo}>Informações da sinalização</Text>

                <Image  
                    source={{uri: sinalizacao.foto_sin.replace(/"/g, "")}} 
                    style={{
                        width: "80%",
                        height: 100,
                        borderRadius: 8,
                        }}
                    resizeMode="cover" />
                                    
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

        backgroundColor: "rgba(51, 51, 51, 0.5)",

        elevation: 8
    },
    Container: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "80%",
        bottom: 0,
        alignItems: "center",

        backgroundColor: "#63E1FD",

        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    },
    titulo: {
        marginTop: 25,
        marginBottom: 16,

        fontSize: 23,
        fontWeight: "bold",
        color: "white"
    }
})