import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import estilo from '../components/estilo'
import PraiaFundo from '../components/PraiaFundo'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import Btn from '../components/Btn'

export default props => {
    return(
        <View style={estilo.Flex1}>
            <PraiaFundo>
                <Menu>
                    <Logo />
                    <Text style={{color: "#333333", fontSize: 24, paddingTop: 16}}>Bem Vindo!</Text>
                    <Text style={{color: "#333333", fontSize: 14, textAlign: "center", paddingBottom: 32, paddingHorizontal: 24}}>
                        Você escolheu ajudar a natureza usando Oclean!
                    </Text>
                    <Btn titulo="Sou novo" funcaoPressionar={() => {props.navigation.navigate("CadastroEscolha")}}/>
                    <Text style={{color:"#63E1FD",fontSize:18, paddingTop: 8}}>Já tenho conta</Text>
                </Menu>
            </PraiaFundo>
        </View>
    )
}