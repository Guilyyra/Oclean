import React from 'react'
import { View } from 'react-native'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Btn from '../components/Btn'
import estilo from '../components/estilo'

export default props => {

    logout = () => {
        delete axios.defaults.headers.common["Authorization"]
        AsyncStorage.removeItem("userData")
        props.navigation.navigate("BemVindo")
    }

    return(
        <View style={[estilo.Flex1, { justifyContent: 'center', alignItems: 'center'} ]} >
            <Btn 
                titulo="Logout" 
                largura="50%" 
                funcaoPressionar={_ => logout()}/>
        </View>
    )
}