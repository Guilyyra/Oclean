import React, { useState } from 'react'
import { SafeAreaView, View, Text, Keyboard, StyleSheet  } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../../components/estilo'
import Btn from '../../components/Btn'
import Ipt from '../../components/Input'
import Logo from '../../components/Logo'
import VoltarBtn from '../../components/VoltarBtn'
import Menu from '../../components/Menu'
import PraiaFundo from '../../components/PraiaFundo'

import axios from 'axios';
import { server, showError } from '../../comum'

export default props => {
    
    // Pensar em um jeito de transformar essas duas var em só uma
    const [EsquerdaPrimeiro, setEsquerdaPrimeiro] = useState(0)
    const [EsquerdaUltimo, setEsquerdaUltimo] = useState(200)

    const [positionPrimeiro, setPositionPrimeiro] = useState(null)

    const [nome, setNome] = useState("") // "Lucas"
    const [localizacao, setLocalizacao] = useState("") // São Paulo - SP
    const [email, setEmail] = useState("") // lucas2@gmail.com
    const [senha, setSenha] = useState("") // 123456

    mudarStyle = () => {
        Keyboard.dismiss()
        if(positionPrimeiro === null){
            setEsquerdaPrimeiro('-115%')
            setPositionPrimeiro('absolute')
            setEsquerdaUltimo(0)
        } else {
            setEsquerdaPrimeiro(0)
            setPositionPrimeiro(null)
            setEsquerdaUltimo(200)
        }
    }

    cadastrar = async() => {
        try{
            await axios.post(`${server}/usuarios/cadastrar`, {
                nome_usu: nome,
                email_usu: email,
                senha_usu: senha,
                loc_usu: localizacao,
                data_usu: data,
                tipo_usu: "Pessoa"
            })
            
            props.navigation.navigate("Login")
        } catch(erro) {
            switch(JSON.stringify(erro.response.data)){
                case '"Email já cadastrado!"':
                    setErroEmail(erro.response.data)
                    break;
                default:
                    showError(erro)
            }
        }
    }

    const[erroEmail, setErroEmail] = useState("")

    const [data, setData] = useState(new Date());
    const [mostrarData, setMostrarData] = useState(false);

    return(
        <SafeAreaView style={estilo.Flex1}>
            <PraiaFundo>
                <Menu>
                    <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} />
                    <View style={{ height: "36%", justifyContent:"center", alignItems: "center"}}>
                        <Logo lado={150} />
                        <Text style={estilo.MenuTitulo}>Cadastro</Text>
                    </View>

                    <View style={{ flexDirection: "row", width: "80%", alignContent: 'center'}} >
                        <View style={[ style.FormContainer, { marginLeft: EsquerdaPrimeiro, marginRight: '15%', position: positionPrimeiro } ]}>
                            <Text style={estilo.inputTitulo}>Nome:</Text>
                            <Ipt placeholder="João Augusto da silva" largura="100%"  valor={nome} setValor={setNome}/>

                            {/*Precisa colocar as barras das datas automaticamente, coloquei numeric por enquanto*/}
                            <Text style={estilo.inputTitulo}>Data de nascimento:</Text>
                            <Ipt placeholder="Coloque a sua data de nascimento!"
                                valor={`${data.getDate().toString()}/${data.getMonth().toString()}/${data.getFullYear().toString()}`}
                                largura="100%"
                                funcaoPressionar={_ => {
                                    setMostrarData(true)
                                    Keyboard.dismiss()}}/>
                            {mostrarData &&
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={data}
                                mode='date'
                                is24Hour={true}
                                display="default"
                                onChange={(event, DataSelecionada) => {
                                    setMostrarData(false)
                                    setData(DataSelecionada)}}
                            />}

                            <Text style={estilo.inputTitulo}>Localização:</Text>
                            <Ipt placeholder="São Paulo - SP" largura="100%" valor={localizacao} setValor={setLocalizacao}/>
                        </View>

                        <View style={[ style.FormContainer, { marginLeft: EsquerdaUltimo } ]}>
                            <Text style={estilo.inputTitulo}>Email:</Text>
                            <Ipt placeholder="exemplo@exemplo.com.br" largura="100%" marginBottom={4} valor={email} setValor={setEmail}/>
                            <Text style={[estilo.iptErro, {marginBottom: 12}]}>{erroEmail}</Text>

                            {/*Precisa colocar as barras das datas automaticamente, coloquei numeric por enquanto*/}
                            <Text style={estilo.inputTitulo}>Senha:</Text>
                            <Ipt placeholder="Senha segura e confiável" escondido={true} largura="100%" valor={senha} setValor={setSenha}/>
                        </View>
                    </View>

                    {/* Renderizações condicionais */}
                    { positionPrimeiro === null && 
                        <Btn titulo="Próximo" largura="50%" marginVertical={8} funcaoPressionar={_ => mudarStyle()} />}
                    { positionPrimeiro === "absolute" &&
                        <>
                            <Btn titulo="Cadastrar" largura="50%" marginVertical={8} funcaoPressionar={_ => cadastrar()} />
                            <Btn somenteTexto={true} tamanhoFonte={18} titulo="Voltar" funcaoPressionar={_ => mudarStyle()}  />
                        </>}

                </Menu>
            </PraiaFundo>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FormContainer: {
        width: '100%',
        alignSelf: 'center'
    }
})