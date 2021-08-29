import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import PraiaFundo from './components/PraiaFundo'
import Menu from './components/Menu'
import Logo from './components/Logo'
import Btn from './components/Btn'

export default() => (
    <View style={style.container}>
        <PraiaFundo>
            <Menu>
                <Logo />
                <Text style={{color: "#333333", fontSize: 24, paddingTop: 24}}>Bem Vindo!</Text>
                <Text style={{color: "#333333", fontSize: 14, textAlign: "center", paddingBottom: 40}}>
                    Você escolheu ajudar a natureza usando Oclean!
                </Text>
                <Btn titulo="Sou novo" />
                <Text style={{color:"#63E1FD",fontSize:18, paddingTop: 8}}>Já tenho conta</Text>
            </Menu>
        </PraiaFundo>
    </View>
)

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})