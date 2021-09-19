import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BemVindo from '../views/BemVindo'
import CadastroEscolha from '../views/CadastroEscolha'
import CadastroONG from '../views/CadastroONG'
import CadastroPessoa from '../views/CadastroPessoa'
import Login from '../views/Login'
import RecuperarSenha from '../views/RecuperarSenha'
import Home from '../views/Home'
import Tab from './Tab'
import Comunidade from '../views/Comunidade'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="BemVindo" screenOptions={{headerShown: false}}>
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="CadastroEscolha" component={CadastroEscolha} />
        <Stack.Screen name="CadastroONG" component={CadastroONG} />
        <Stack.Screen name="CadastroPessoa" component={CadastroPessoa} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Tab" component={Tab} />
    </Stack.Navigator>
)