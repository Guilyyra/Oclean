import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import estilo from '../../components/estilo'
import Btn from '../../components/Btn'
import Logo from '../../components/Logo'
import VoltarBtn from '../../components/VoltarBtn'
import PraiaFundo from '../../components/PraiaFundo'
import Menu from '../../components/Menu'

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
                    <View style={{ height: "36%", justifyContent:"center",alignItems: "center"}}>
                        <Logo lado={150} />
                        <Text style={[estilo.MenuTitulo, {paddingBottom: 0}]}>Cadastro</Text>
                    </View>
                    
                    <Btn
                        altura={54}
                        svg={<MaterialIcons name="business" size={24} color="#fff" />}
                        svgEsquerda={16}
                        titulo="ONG"
                        funcaoPressionar={() => {props.navigation.navigate("CadastroONG")}}/>
                    <Btn
                        altura={54}
                        svg={<MaterialIcons name="directions-run" size={24} color="#fff" />}
                        svgEsquerda={16}
                        titulo="Pessoa"
                        funcaoPressionar={() => {props.navigation.navigate("CadastroPessoa")}} />
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
