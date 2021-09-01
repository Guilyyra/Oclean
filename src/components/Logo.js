import React from 'react'
import { Image } from 'react-native'
import Estilo from './estilo'

export default props => {
    const ImgLogo = require('../img/oclean_logo.png')
    const lado = props.lado || 100

    return(
        <Image 
            source={ImgLogo} 
            style={{
                width: lado,
                height: lado               
            }}
            resizeMode="cover"
        />
    )
}