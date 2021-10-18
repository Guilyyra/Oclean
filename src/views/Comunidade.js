import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'

import axios from 'axios'
import { server, showError } from '../comum'

export default props => {
    const ImgFundo = require('../img/desenho_praia.png')
    const nome = props.route.params.nome_comu

    var [comu, setComu] = useState({ 
        nome_comu: "Carregando...", 
        banner_comu: "http://192.168.15.28:3000/img/lucas.jpg",
        foto_perfil_comu: "http://192.168.15.28:3000/img/lucas.jpg"})

    const getComunidade = async () => {
        if(comu.nome_comu == 'Carregando...'){
            try{
            const res = await axios.get(`${server}/comunidades/${nome.replace(/ /g, "%20")}`)
            setComu(res.data[0])
            } catch(e) {
                showError(e)
            }
        }
    }
    getComunidade()

    return(
        <>
        <Header navegacao={props.navigation} />
        <SafeAreaView style={estilo.Flex1}>
            
            <Image 
                source={{ uri: comu.banner_comu.replace(/"/g, "") }} 
                style={{ width: "100%", height: 100 }}
                resizeMode="cover" />
            
            <View style={style.ContainerImgPerfil}>
                <Image 
                    source={{ uri: comu.foto_perfil_comu.replace(/"/g, "") }} 
                    style={style.ImgPerfil}
                    resizeMode="contain" />
            </View>

            <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} />
        </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    ContainerImgPerfil: {
        width: '31%',
        height: '16%',
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 16,
        marginTop: -140,
        backgroundColor: "red"
    },
    ImgPerfil: {
        width: "100%",
        height: "100%",        
    }
})