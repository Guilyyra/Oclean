import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Comunidade from '../views/Comunidade'
import Home from '../views/Home'
import Lixo from '../views/Lixo'
import Perfil from '../views/Perfil'

const Stack = createNativeStackNavigator()

export default props => {
    const r = props.route
    const tela = r && r.params && r.params.Tela ? r.params.Tela : "Home"
    return (
        <Stack.Navigator initialRouteName={tela} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Lixo" component={Lixo} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Comunidade" component={Comunidade} />
        </Stack.Navigator>
    )
}