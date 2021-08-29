import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default props => {
    const imgPraia = require("../img/desenho_praia.png");
    return (
        <ImageBackground source={imgPraia} resizeMode="cover" style={style.image}>
            {props.children}
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})