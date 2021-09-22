import React from 'react'
import { ScrollView, StyleSheet, Image, View, Text  } from 'react-native'

import estilo from '../components/estilo'
import Header from '../components/Header'
import Btn from '../components/Btn'
import Post from '../components/Post'

export default props => {
    const ImgFundo = require('../img/desenho_praia.png')
    const ImgPerfil = require('../img/oclean_logo.png')
    return(
        // Quando adicionar mais coisas trocar a View por ScrollView
        <View style={estilo.Flex1} >
            <Header navegacao={props.navigation} />
            <Image 
                source={ImgFundo} 
                style={{ width: "100%", height: 100 }}
                resizeMode="cover" />
            
            <View style={style.ContainerTextos} >
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                    <Text style={{ fontSize: 24 }}> Julio Hiago </Text>
                    <Text style={{ fontSize: 12, color: "rgba(51, 51, 51, 0.6)"}}> · 22 anos </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                    <Text style={{ fontSize: 13 }}> São Paulo - SP </Text>
                    <Text style={{ fontSize: 11, color: "rgba(51, 51, 51, 0.6)"}}> · 3 comunidades </Text>
                </View>
                <Text style={{ fontSize: 14, paddingRight: 16 }}> Gosto muito da brisa da praia e do mar 🍃 </Text> 
            </View>
            
            <View style={style.ContainerImgPerfil}>
                <Image 
                    source={ImgPerfil} 
                    style={style.ImgPerfil}
                    resizeMode="contain" />
            </View>
            <Btn 
                    titulo="Editar Perfil" 
                    tamanhoFonte={14}
                    largura="25%"
                    marginVertical={8}
                    marginHorizontal={24} />

        </View>
    )
}

const style = StyleSheet.create({
    ContainerTextos: {
        marginLeft: '31%',
        paddingLeft: 32,
    },
    ContainerImgPerfil: {
        width: '31%',
        height: '16%',
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 16,
        marginTop: -140
    },
    ImgPerfil: {
        width: "100%",
        height: "100%",        
    }

})
