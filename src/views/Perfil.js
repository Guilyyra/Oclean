import React from 'react'
import { SafeAreaView, StyleSheet, Image, View  } from 'react-native'

import estilo from '../components/estilo'
import Header from '../components/Header'

export default props => {
    const ImgFundo = require('../img/desenho_praia.png')
    const ImgPerfil = require('../img/oclean_logo.png')
    return(
        <SafeAreaView style={estilo.Flex1} >
            <Header navegacao={props.navigation} />
            <Image 
                source={ImgFundo} 
                style={{ width: "100%", height: 100 }}
                resizeMode="cover" />
            <View style={style.ContainerImgPerfil}>
                <Image 
                    source={ImgPerfil} 
                    style={style.ImgPerfil}
                    resizeMode="contain" />
            </View>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    ContainerImgPerfil: {
        width: "40%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: -60,
    },
    ImgPerfil: {
        width: "100%",
        height: "100%",

        
    }
})
