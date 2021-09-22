import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'

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
                    {/* Possibilidade de colocar tudo isso em um elemento só */}
                    <View style={{ height: "36%", justifyContent:"center",alignItems: "center"}}>
                        <Logo lado={128} />
                        <Text style={[estilo.MenuTitulo, {paddingBottom: 0}]}>Bem Vindo!</Text>
                    </View>
                        <Text style={estilo.menuSubTitulo}>
                            Você escolheu ajudar a natureza usando Oclean!
                        </Text>
                    {/* Diminuir a distância dos dois botões */}
                    <Btn 
                        titulo="Sou novo"
                        marginVertical="1%"
                        funcaoPressionar={() => props.navigation.navigate("CadastroEscolha")} />
                    <Btn 
                        somenteTexto={true}
                        tamanhoFonte={18}
                        marginVertical="1%" 
                        titulo="Já tenho conta"
                        funcaoPressionar={() => props.navigation.navigate("Login")} />
                </Menu>
            </PraiaFundo>
        </SafeAreaView>
    )
}