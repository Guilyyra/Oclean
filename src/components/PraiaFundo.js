import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

export default () => {

    return (

            <ImageBackground 
                source={require('../images/desenho_praia.png')}
                resizeMode="cover"
            />
    )
}
