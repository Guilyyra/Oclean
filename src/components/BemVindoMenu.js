import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Btn from './Btn'

const ImgLogo = require('../images/oclean_logo.png');

export default () => {

    return (
        <View style={style.menu}>
            <Image source={ImgLogo} style={style.logo} resizeMode="cover" />
            <Text style={{fontSize: 25,paddingTop: 24}}>Bem Vindo!</Text>
            <Text style={{fontSize: 9,textAlign: "center"}}>Você escolheu ajudar a natureza usando Oclean!</Text>

            <Btn titulo={"Sou novo"} />
            <Text style={{color:"#63E1FD",fontSize:15}}>Já tenho conta</Text>
        </View>
    )
}
const style = StyleSheet.create({
    logo: {
        width: 100,
        height: 100
    },
    menu: {
        flex: 0,
        justifyContent:"center",
        alignItems: "center",
        width: "50%",

        backgroundColor: "white",
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23
    },
})