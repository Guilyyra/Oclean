import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import estilo from '../components/estilo'
import PraiaFundo from '../components/PraiaFundo'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import Btn from '../components/Btn'

export default props => {
    return(
        <SafeAreaView style={estilo.Flex1}>
            <PraiaFundo>
                <Menu>
                    <Logo lado={150} />
                    <Text style={[estilo.MenuTitulo, {paddingBottom: 0}]}>Bem Vindo!</Text>
                    <Text style={estilo.menuSubTitulo}>
                        Você escolheu ajudar a natureza usando Oclean!
                    </Text>
                    <Btn 
                        titulo="Sou novo" 
                        funcaoPressionar={() => props.navigation.navigate("CadastroEscolha")} 
                        marginVertical={16} />
                    <Btn 
                        somenteTexto={true}
                        tamanhoFonte={18} 
                        titulo="Já tenho conta"
                        funcaoPressionar={() => props.navigation.navigate("Login")} />
                </Menu>
            </PraiaFundo>
        </SafeAreaView>
    )
}