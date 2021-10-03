import React, { Component, useState } from 'react'
import { SafeAreaView, View, Text, KeyboardAvoidingView  } from 'react-native'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Btn from '../components/Btn'
import Ipt from '../components/Input'
import Logo from '../components/Logo'
import VoltarBtn from '../components/VoltarBtn'
import Menu from '../components/Menu'
import PraiaFundo from '../components/PraiaFundo'

import { server, showError } from '../comum'

export default props => {

    const [email, setEmail] = useState("lucas2@gmail.com")
    const [senha, setSenha] = useState("123456")
    
    login = async () => {
        try{
            const res = await axios.post(`${server}/usuarios/login`, {
                email_usu: email,
                senha_usu: senha,
            })

            AsyncStorage.setItem("userData", JSON.stringify(res.data))
            axios.defaults.headers.common["Authorization"] = `bearer ${res.data.token}`
            props.navigation.navigate("Tab")
        } catch(e) {
            showError(e)
        }
    }

    // Validações - Ainda não está pronto
    const validacoes = []
    validacoes.push(email && email.includes('@'))
    validacoes.push(senha && senha.length >= 6)

    const validacoesForm= validacoes.reduce((t, a) => t && a)

    return(
        <KeyboardAvoidingView style={estilo.Flex1} behavior="behavior">
        <SafeAreaView style={estilo.Flex1}>
            <PraiaFundo>
                <Menu>
                    <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} />
                    <View style={{ height: "32%", justifyContent:"center",alignItems: "center"}}>
                        <Logo lado={150} />
                        <Text style={estilo.MenuTitulo}>Login</Text>
                    </View>

                    <View style={{ width: '80%' }}>
                        <Text style={estilo.inputTitulo}>Email:</Text>
                        <Ipt placeholder="Email" largura="100%" valor={email} setValor={setEmail} />

                        <Text style={estilo.inputTitulo}>Senha:</Text>
                        <Ipt placeholder="Senha" largura="100%" escondido={true} valor={senha} setValor={setSenha} />
                    </View>

                    <Btn 
                        titulo="Entrar" 
                        largura="50%" 
                        marginVertical={8} 
                        funcaoPressionar={login}/>
                    <Btn 
                            somenteTexto={true}
                            tamanhoFonte={14} 
                            titulo="Esqueci minha senha"
                            marginVertical={8}
                            funcaoPressionar={() => props.navigation.navigate("RecuperarSenha")}/>
                </Menu>
            </PraiaFundo>
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}