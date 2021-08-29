import React from 'react'
import { View } from 'react-native'
import Estilo from './estilo'

export default props => (
    <View style={Estilo.MenuContainer}>
        {props.children}
    </View>
)