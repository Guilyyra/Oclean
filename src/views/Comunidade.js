import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform, Text  } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'

export default props => {
    return(
        <SafeAreaView>
            <Header />
            <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} />
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Container: {

    }
})
