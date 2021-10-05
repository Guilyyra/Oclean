import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splash from '../views/Inicial/Splash'
import BemVindo from '../views/Inicial/BemVindo'
import CadastroEscolha from '../views/Inicial/CadastroEscolha'
import CadastroONG from '../views/Inicial/CadastroONG'
import CadastroPessoa from '../views/Inicial/CadastroPessoa'
import Login from '../views/Inicial/Login'
import RecuperarSenha from '../views/Inicial/RecuperarSenha'
import Tab from './Tab'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="CadastroEscolha" component={CadastroEscolha} />
        <Stack.Screen name="CadastroONG" component={CadastroONG} />
        <Stack.Screen name="CadastroPessoa" component={CadastroPessoa} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Tab" component={Tab} />
    </Stack.Navigator>
)