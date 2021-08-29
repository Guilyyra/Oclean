import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Input from './Input'
import estilo from './estilo';
import Btn from './Btn'

const ImgLogo = require('../img/oclean_logo.png');

export default () => {

    return (
        <View style={estilo.welcomeWrapper}>
            <View style={estilo.welcomeContainer}>
                <Image source={ImgLogo} style={estilo.logo} resizeMode="cover" />
                <Text style={{color: "#333333", fontSize: 24,paddingTop: 24}}>Login</Text>
                <Text style={estilo.inputTitle}>Email:</Text>
                <Input inputPlaceholder={"Digite seu Email"}></Input>
                <Text style={estilo.inputTitle}>Senha:</Text>
                <Input inputPlaceholder={"Digite sua Senha"}></Input>
                <Btn titulo={"Entrar"}></Btn>
                <Text style={{color:"#63E1FD",fontSize:20, width: "70%", textAlign: "center"}}>Esqueci minha senha</Text>
            </View>
        </View>
    )
}
