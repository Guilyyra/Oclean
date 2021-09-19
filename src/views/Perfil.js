import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform, Text  } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import Btn from '../components/Btn'

export default props => {
    return(
        <SafeAreaView>
            <Header />
            <Text>Perfil</Text>
            <Btn 
                somenteTexto={true}
                tamanhoFonte={18} 
                titulo="Comunidade"
                funcaoPressionar={() => props.navigation.navigate("Comunidade")} />
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Container: {

    }
})
