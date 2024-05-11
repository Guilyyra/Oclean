import React from 'react'
import { SafeAreaView, View, Text  } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../../components/estilo'
import Btn from '../../components/Btn'
import Ipt from '../../components/Input'
import Logo from '../../components/Logo'
import VoltarBtn from '../../components/VoltarBtn'
import Menu from '../../components/Menu'
import PraiaFundo from '../../components/PraiaFundo'

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
                    <Text style={estilo.MenuTitulo}>Esqueci minha senha</Text>
                </View>

                <Text style={ estilo.menuSubTitulo }>Insira o seu email e enviaremos um link para recuperar sua senha</Text>
                <Ipt placeholder="Email" largura="80%"/>

                <Btn titulo="Recuperar Senha"  marginVertical={8} />

            </Menu>
        </PraiaFundo>
    </SafeAreaView>
)