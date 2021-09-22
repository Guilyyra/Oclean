import React from 'react'
import { SafeAreaView, StyleSheet, Text  } from 'react-native'

import estilo from '../components/estilo'
import Header from '../components/Header'

export default props => {
    return(
        <SafeAreaView style={estilo.Flex1} >
            <Header navegacao={props.navigation}/>
            <Text>Lixo</Text>
        </SafeAreaView>
    )
}