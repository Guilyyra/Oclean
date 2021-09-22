import React from 'react'
import { ScrollView, Text  } from 'react-native'

import estilo from '../components/estilo'
import Header from '../components/Header'

export default props => {
    return(
        <ScrollView style={estilo.Flex1} >
            <Header navegacao={props.navigation}/>
            <Text>Lixo</Text>
        </ScrollView>
    )
}