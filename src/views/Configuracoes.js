import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { CommonActions } from '@react-navigation/routers'


import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Btn from '../components/Btn'
import VoltarBtn from '../components/VoltarBtn'
import estilo from '../components/estilo'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common["Authorization"]
        AsyncStorage.removeItem("userData")
        // reseta a navegação (inclusive os parâmetros)
        props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'BemVindo' }
              ],
            })
        );

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