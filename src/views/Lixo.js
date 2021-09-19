import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform, Text  } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'

export default props => {
    return(
        <SafeAreaView>
            <Header />
            <Text>Lixo</Text>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Container: {

    }
})
