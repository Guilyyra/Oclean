import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import estilo from '../components/estilo'
import Btn from '../components/Btn'
import Logo from '../components/Logo'
import VoltarBtn from '../components/VoltarBtn'
import PraiaFundo from '../components/PraiaFundo'
import Menu from '../components/Menu'

export default props => {
    const a = <MaterialIcons name="business" size={24} color="#fff" /> + "ong"
    return (
        <SafeAreaView style={estilo.Flex1}>
            <PraiaFundo>
                <Menu>
                    <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} />
                    <Logo lado={150} />
                    <Text style={{color: "#333333", fontSize: 24, paddingTop: 16,paddingBottom: 24}}>Cadastro</Text>
                    
                    <Btn
                        altura={"15%"}
                        svg={<MaterialIcons name="business" size={24} color="#fff" />}
                        titulo="ONG"
                        funcaoPressionar={() => {props.navigation.navigate("CadastroONG")}}
                        marginVertical={16} />
                    <Btn
                        altura={"15%"}
                        svg={<MaterialIcons name="directions-run" size={24} color="#fff" />}
                        titulo="Pessoa"
                        funcaoPressionar={() => {props.navigation.navigate("CadastroPessoa")}}
                        marginVertical={20} />
                </Menu>
            </PraiaFundo>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    }
})
