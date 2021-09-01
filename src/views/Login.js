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
                <Logo lado={150} />
                <Text style={estilo.MenuTitulo}>Login</Text>

                <Text style={estilo.inputTitulo}>Email:</Text>
                <Ipt placeholder="Email" largura="80%"/>

                <Text style={estilo.inputTitulo}>Senha:</Text>
                <Ipt placeholder="Senha" largura="80%" escondido={true} />

                <Btn titulo="Entrar" largura="50%" marginVertical={8} />
                <Btn 
                        somenteTexto={true}
                        tamanhoFonte={14} 
                        titulo="Esqueci minha senha"
                        marginVertical={8} />
            </Menu>
        </PraiaFundo>
    </SafeAreaView>
)