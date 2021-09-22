import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import Estilo from './estilo'
import { MaterialIcons } from '@expo/vector-icons'

export default props => {
    const ImgLogo = require('../img/oclean_logo.png')
    const largura = 30
    const altura = 30
    return(
        <View style={style.postContainer}>
            <View style={style.postInformacoesUsuarioContainer}>
                <Image 
                    source={ImgLogo}
                    style={{
                        width: largura,
                        height: altura,
                        marginRight: 12,               
                    }}
                    resizeMode="cover"
                />
                <Text style={{fontSize: 13, marginRight: 8}}>Júlio Hiago - Limpa Praias · 30min</Text>
            </View>
            <View style={style.postContainerConteudo}>
                <Text style={{fontSize: 18}}>Fiz um desenho pois adoro a praia! Vamo!</Text>
            </View>
            <View style={style.postcontainerImagem}>
                <Image 
                    style={style.postImagem}
                    source={require('../img/postimg.jpg')}
                    />
            </View>
            <View style={style.postContainerCurtidas}>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                    <MaterialIcons style={{ marginRight: 8}}name="thumb-up" size={24} color="#333333" />
                    <Text>18</Text>
                </View>
                <MaterialIcons name="share" size={24} color="#333333" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    postContainer: {
        width: "90%",
        height: "auto",
        backgroundColor: "white",
        borderRadius: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 24
    },
    postcontainerImagem: {
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    postImagem: {
        width: "80%",
        height: 240,
        borderRadius: 16,
    },
    postInformacoesUsuarioContainer: {
        flexDirection: "row",
        paddingLeft: 16,
        paddingTop: 16,
        alignItems: "center",

    },
    postContainerConteudo: {
        flex: 1,
        marginBottom: 32,
        marginTop: 16,
        paddingLeft: 16,
    },
    postContainerCurtidas: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 32,
    }
})