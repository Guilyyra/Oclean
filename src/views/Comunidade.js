import React from 'react'
import { SafeAreaView } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import VoltarBtn from '../components/VoltarBtn'

export default props => {
    return(
        <SafeAreaView>
            <Header navegacao={props.navigation} />
            <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} />
        </SafeAreaView>
    )
}