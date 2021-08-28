import React from 'react'
import { Text,  Image, TouchableOpacity } from 'react-native'

import estilo from './estilo';



export default ({ titulo }) => {

    return (
        <TouchableOpacity style={estilo.welcomeButton}>
            <Text style={estilo.welcomeTitle}>{titulo}</Text>
        </TouchableOpacity>
    )
}
export function BtnSignup({titulo, Img, ImgSize}){
    return(
        <TouchableOpacity style={estilo.signupButton}>
            <Image source={Img} style={{height: ImgSize, width: ImgSize, marginRight: 18}}/>
            <Text style={estilo.welcomeTitle}>{titulo}</Text>
        </TouchableOpacity>
    )
}

