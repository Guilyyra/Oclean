import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Btn from '../components/Btn'
import VoltarBtn from '../components/VoltarBtn'
import estilo from '../components/estilo'

export default props => {

    logout = () => {
        delete axios.defaults.headers.common["Authorization"]
        AsyncStorage.removeItem("userData")
        props.navigation.navigate("BemVindo")
    }

    return(
        <View style={[estilo.Flex1, { justifyContent: 'center', alignItems: 'center'} ]} >
            <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} />
            <Btn 
                titulo="Logout" 
                largura="50%" 
                funcaoPressionar={_ => logout()}/>
        </View>
    )
}