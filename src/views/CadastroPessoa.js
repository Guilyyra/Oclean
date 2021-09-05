import React from 'react'
import { SafeAreaView, View, Text  } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Btn from '../components/Btn'
import Ipt from '../components/Input'
import Logo from '../components/Logo'
import VoltarBtn from '../components/VoltarBtn'
import Menu from '../components/Menu'
import PraiaFundo from '../components/PraiaFundo'

export default props => (
    <SafeAreaView style={estilo.Flex1}>
        <PraiaFundo>
            <Menu>
                <VoltarBtn 
                    titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                    navegacao={props.navigation}
                    style={estilo.VoltarBtn} />
                <View style={{ height: "36%", justifyContent:"center",alignItems: "center"}}>
                    <Logo lado={150} />
                    <Text style={estilo.MenuTitulo}>Cadastro</Text>
                </View>

                <Text style={estilo.inputTitulo}>Nome:</Text>
                <Ipt placeholder="Nome" largura="80%"/>

                <Text style={estilo.inputTitulo}>Nome de usuário:</Text>
                <Ipt placeholder="Nome de usuário" largura="80%"/>

                {/*Precisa colocar as barras das dataas automaticamente, coloquei numeric por enquanto*/}
                <Text style={estilo.inputTitulo}>Data de nascimento:</Text>
                <Ipt placeholder="Data de nascimento" largura="80%" tipoTeclado="numeric"/>

                <Btn titulo="Próximo" largura="50%" marginVertical={8} />
            </Menu>
        </PraiaFundo>
    </SafeAreaView>
)