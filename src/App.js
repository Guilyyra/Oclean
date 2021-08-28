import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import PraiaFundo from './components/PraiaFundo'
import BemVindoMenu from './components/BemVindoMenu'

const ImgPraia = require('./images/desenho_praia.png');

export default() => (
    <View style={style.container}>
        <ImageBackground source={ImgPraia} resizeMode="cover" style={style.image}>
            <BemVindoMenu />
            <Text>Aoba</Text>
        </ImageBackground>
    </View>
)

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    },
})