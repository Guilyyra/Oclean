import React from 'react'
import { Image } from 'react-native'
import Estilo from './estilo'

export default props => {
    const ImgLogo = require('../img/oclean_logo.png')
    const largura = props.largura || 120
    const altura = props.altura || 120
    return(
        <Image 
            source={ImgLogo} 
            style={{
                width: largura,
                height: altura               
            }}
            resizeMode="cover"
        />
    )
}