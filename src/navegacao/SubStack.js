import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Comunidade from '../views/Comunidade'
import Home from '../views/Home'
import Lixo from '../views/Lixo'
import Perfil from '../views/Perfil'
import Configuracoes from '../views/Configuracoes'
import CriarComunidade from '../views/CriarComunidade'
import CriarPost from '../views/CriarPost'
import Post from '../views/Post'
import EditarPost from '../views/EditarUsuario'
import EditarComunidade from '../views/EditarComunidade'
import Pesquisar from '../views/Pesquisar'

const Stack = createNativeStackNavigator()

export default props => {
    const r = props.route
    const parametros = r.params
    const tela = r && r.params && r.params.Tela ? r.params.Tela : "Home"
    return (
        <Stack.Navigator initialRouteName={tela} screenOptions={{headerShown: false}} >
            <Stack.Screen name="Home" component={Home} initialParams={parametros} />
            <Stack.Screen name="Lixo" component={Lixo} initialParams={parametros} />
            <Stack.Screen name="Perfil" component={Perfil} initialParams={parametros} />
            <Stack.Screen name="Comunidade" component={Comunidade} initialParams={parametros}/>
            <Stack.Screen name="Configuracoes" component={Configuracoes} />
            <Stack.Screen name="CriarComunidade" component={CriarComunidade} initialParams={parametros} />
            <Stack.Screen name="CriarPost" component={CriarPost} initialParams={parametros} />
            <Stack.Screen name="Post" component={Post} initialParams={parametros} />
            <Stack.Screen name="EditarUsuario" component={EditarPost} initialParams={parametros} />
            <Stack.Screen name="EditarComunidade" component={EditarComunidade} initialParams={parametros} />
            <Stack.Screen name="Pesquisar" component={Pesquisar} initialParams={parametros} />
        </Stack.Navigator>
    )
}