import React, { useState } from 'react'
import { ScrollView, StyleSheet, StatusBar, Text, View, Image  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'
import Btn from '../components/Btn'

import moment from 'moment';
import "moment/min/locales";

export default  props => {
    const [imgPerfil, setImgPerfil] = useState({ uri: ""})

    return(
        <>
            <ScrollView>
                <Header navegacao={props.navigation} />
                <VoltarBtn 
                    titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                    navegacao={props.navigation}
                    style={style.voltarBtn}
                    top={StatusBar.currentHeight + 80} />
                <View style={style.UsuarioContainer}>
                    <Image 
                        source={require('../img/oclean_logo.png')}
                        style={{
                            width: 80,
                            height: 80,
                            marginRight: 12,               
                        }} />
                </View>
            </ScrollView>
        </>
    )
}
const style = StyleSheet.create({
    voltarBtn: {
        marginTop: 200
    },
    UsuarioContainer: {
        marginLeft: 80
    }
})
