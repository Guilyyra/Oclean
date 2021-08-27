import React from 'react'
import { Text,  StyleSheet, TouchableOpacity } from 'react-native'

import estilo from './estilo';

const ImgLogo = require('../images/oclean_logo.png');

export default ({ titulo, buttonMargin }) => {

    return (
        <TouchableOpacity style={estilo.welcomeButton}>
            <Text style={estilo.welcomeTitle}>{titulo}</Text>
        </TouchableOpacity>
    )
}

