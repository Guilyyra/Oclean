import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Btn from './Btn'
import estilo from './estilo';

const ImgLogo = require('../img/oclean_logo.png');

export default () => {

    return (
        <View style={estilo.welcomeWrapper}>
            <View style={estilo.welcomeContainer}>
                <Image source={ImgLogo} style={estilo.logo} resizeMode="cover" />
                <Text style={{color: "#333333", fontSize: 24,paddingTop: 24}}>Bem Vindo!</Text>
                <Text style={{color: "#333333", fontSize: 14,textAlign: "center", paddingHorizontal: 25}}>Você escolheu ajudar a natureza usando Oclean!</Text>
                <Btn titulo={"Sou novo"}/>
                <Text style={{color:"#63E1FD",fontSize:24}}>Já tenho conta</Text>
            </View>
        </View>
    )
}
