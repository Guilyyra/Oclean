import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import {BtnSignup} from './Btn'
import estilo from './estilo';

const ImgLogo = require('../images/oclean_logo.png');

export default () => {

    return (

        <View style={estilo.welcomeWrapper}>
            <View style={estilo.welcomeContainer}>
                <Image source={ImgLogo} style={estilo.logo} resizeMode="cover" />
                <Text style={{color: "#333333", fontSize: 24,paddingTop: 24,}}>Cadastro</Text>
                <BtnSignup Img={ImgLogo} ImgSize={50} titulo={"ONG"}/>
                <BtnSignup Img={ImgLogo} ImgSize={50} titulo={"Pessoa"}/>
            </View>
        </View>
    )
}
