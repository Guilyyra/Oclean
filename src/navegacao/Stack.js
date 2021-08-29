import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BemVindo from '../views/BemVindo'
import CadastroEscolha from '../views/CadastroEscolha'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="BemVindo" screenOptions={{headerShown: false}}>
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="CadastroEscolha" component={CadastroEscolha} />
    </Stack.Navigator>
)