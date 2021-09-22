import React from 'react'
import { Image } from 'react-native'

export default props => {
    const ImgLogo = require('../img/oclean_logo.png')
    const lado = props.lado
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