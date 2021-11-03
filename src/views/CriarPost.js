import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'

import estilo from '../components/estilo'
import Header from '../components/Header'
import Ipt from '../components/Input'
import Btn from '../components/Btn'
import VoltarBtn from '../components/VoltarBtn'
import BtnImg from '../components/BtnImg'
import ComunidadeOpcoes from '../components/ComunidadeOpcoes'

import { server, showError } from '../comum'

import { uploadFoto } from '../components/imgComum'
import ComunidadeOpcao from '../components/ComunidadeOpcao'



export default props => {

    const parametros = props.route.params
    const id = parametros.id_usu

    const [fotoLargura, setFotoLargura] = useState("100%")

    const novaMedida = (result) => {
        const largura = result.width
        const altura = result.height
        const novaAltura = 300
        const novaLargura = novaAltura / (altura/largura) 
        setFotoLargura(novaLargura)
    }

    const cadastrar = async() => {

        try{
            if(foto.uri !=   `${server}/img/banner.png`){
                linkFoto = await uploadFoto(foto, 'foto_post', id)
            }else{
                linkFoto = ""
            }

            data = new Date()

            const res = await axios.post(`${server}/post/postar`, {
                titulo_post: titulo,
                descricao_post: descricao,
                data_post: data,
                foto_post: linkFoto,
                id_usu: id,
                id_comu: comunidadeEscolhida,
            })
            
            props.navigation.navigate("Home")
        } catch(erro) {
            showError(erro)
        }
    }

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [foto, setFoto] = useState({ uri: `${server}/img/banner.png`})
    const [comunidadeEscolhida, setComunidadeEscolhida] = useState(-1)

    const [opcoes, setOpcoes] = useState(true)

    return(
        <>
            {opcoes && <ComunidadeOpcoes 
                comunidadeEscolhida={comunidadeEscolhida}
                setComunidadeEscolhida={setComunidadeEscolhida}
                id_usu={id} 
                funcaoProximo={_ => setOpcoes(false)} />}
            <ScrollView style={[estilo.Flex1, {backgroundColor: "#F3F2F3",}]} >
                
                <Header navegacao={props.navigation}/>
                <VoltarBtn 
                    titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                    navegacao={props.navigation}
                    style={estilo.VoltarBtn} 
                    top={StatusBar.currentHeight + 80}/>
                <Text style={style.titulo}>Criar Post</Text>
                <View style={style.ContainerForm}>
                    <Text style={style.TituloIpt}>Titulo:</Text>
                    <Ipt placeholder="Ex: Eu amo o oceano🌊⛱💧" largura="100%"  marginBottom={1} valor={titulo} setValor={setTitulo} />
                    
                    <Text style={style.TituloIpt}>Descrição:</Text>
                    <Ipt 
                        multiline={true} placeholder="Ex: A praia é muito boa e bonita. Vou a praia todo final de semana, vamos celebrar!" 
                        largura="100%" 
                        altura={50} 
                        marginBottom={16}
                        valor={descricao}
                        setValor={setDescricao}/>
                    
                    <View style={{ width: "100%", alignItems: "center"}}>
                    <Text style={[style.TituloIpt, {alignSelf: "flex-start"}]}>Adicionar Foto:</Text>
                            <Image 
                                source={foto} 
                                style={{
                                    maxWidth: "100%",
                                    width: fotoLargura,
                                    height: 300,  
                                    marginBottom: 16
                            }}
                            resizeMode="contain" />

                    </View>
                    <View style={{justifyContent: "center", flexDirection: "row", marginBottom: 16}}>
                        <MaterialIcons style={{marginHorizontal: 16}} name="photo-camera" size={24} color="#333333" />
                        <BtnImg permitirEdicao={false} aspectoLargura={400} aspectoAltura={400} funcaoPressionar={async result => {
                            setFoto(result)
                            novaMedida(result)}}/>
                    </View>
                    
                    <View style={{alignSelf: "center", width: "50%"}}>
                        <Btn 
                            titulo="Criar" 
                            largura="100%" 
                            marginVertical={8} 
                            funcaoPressionar={_ => {
                                cadastrar()
                            }} />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 28,
        color: "#333333",
        alignSelf: "center",
        marginBottom: 26
    },
    ContainerForm: {
        paddingHorizontal: 16
    },
    TituloIpt: {
        fontSize: 18,
        color: "rgba(51, 51, 51, 0.6)"
    },
})