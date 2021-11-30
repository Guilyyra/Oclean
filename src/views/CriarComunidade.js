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

import { server, showError } from '../comum'

import { uploadFoto } from '../components/imgComum'



export default props => {

    const parametros = props.route.params
    const id = parametros.id_usu

    const cadastrar = async() => {

        try{
            const res = await axios.post(`${server}/comunidades/cadastrar`, {
                nome_comu: nome,
                descricao_comu: descricao,
                id_ong: id
            })

            const comu = await axios.get(`${server}/comunidades/${nome.replace(/ /g, "%20")}`)

            linkPerfil = await uploadFoto(fotoPerfil, 'fotoPerfil_comunidade', comu.data[0].id_comu)
            linkBanner = await uploadFoto(fotoBanner, 'fotoBanner_comunidade', comu.data[0].id_comu)
            
            await axios.put(`${server}/comunidades/${comu.data[0].id_comu}/alterar`, {
                foto_perfil_comu: linkPerfil,
                banner_comu: linkBanner,
            })
            
            await axios.post(`${server}/comunidades/entrar`, {
                id_usu: id,
                id_comu: comu.data[0].id_comu
            })
            
            props.navigation.navigate("Home")
        } catch(erro) {
            switch(JSON.stringify(erro.response.data)){
                case '"Nome da comunidade já cadastrado!"':
                    setErroNome(erro.response.data)
                    break;
                default:
                    showError(erro)
            }
        }
    }

    const [nome, setNome] = useState("") // Comunidade das folhas
    const [descricao, setDescricao] = useState("") // Para amantes da briza do mar 🌴🍃🍀🌵, da conversação, da botânica e outros...
    const [erroNome, setErroNome] = useState("")
    const [fotoBanner, setFotoBanner] = useState({ uri: `${server}/img/banner.png`})
    const [fotoPerfil, setFotoPerfil] = useState({ uri: `${server}/img/perfil.png`})
    

    return(
        <ScrollView style={[estilo.Flex1, {backgroundColor: "#F3F2F3",}]} >
            <Header navegacao={props.navigation}/>
            <VoltarBtn 
                titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                navegacao={props.navigation}
                style={estilo.VoltarBtn} 
                top={StatusBar.currentHeight + 80}
                />
            <Text style={style.titulo}>Criar Comunidade</Text>
            <View style={style.ContainerForm}>
                <Text style={style.TituloIpt}>Nome:</Text>
                <Ipt placeholder="Ex: Comunidade das Folhas" largura="100%"  marginBottom={1} valor={nome} setValor={setNome} />
                <Text style={[estilo.iptErro, {marginBottom: 16}]}>{erroNome}</Text>

                <Text style={style.TituloIpt}>Descrição:</Text>
                <Ipt 
                    multiline={true} placeholder="Ex: Para amantes da briza do mar 🌴🍃🍀🌵, da conversação, da botânica e outros..." 
                    largura="100%" 
                    altura={50} 
                    marginBottom={16}
                    valor={descricao}
                    setValor={setDescricao}/>
                
                <View style={{ width: "100%", alignItems: "center"}}>
                <Text style={[style.TituloIpt, {alignSelf: "flex-start"}]}>Adcionar Foto de perfil:</Text>
                        <Image 
                            source={fotoPerfil} 
                            style={{ 
                                width: 200, 
                                height: 200,  
                                borderRadius: 200,
                                overflow: "hidden",
                                marginBottom: 16
                        }}
                        resizeMode="cover" />
                </View>
                <View style={{justifyContent: "center", flexDirection: "row", marginBottom: 16}}>
                    <MaterialIcons style={{marginHorizontal: 16}} name="photo-camera" size={24} color="#333333" />
                    <BtnImg aspectoLargura={400} aspectoAltura={400} funcaoPressionar={result => setFotoPerfil(result)} />
                </View>

                <View>
                    <Text style={style.TituloIpt}>Adcionar Foto de capa:</Text>
                    <Image 
                        source={fotoBanner} 
                        style={{ 
                            width: "100%", 
                            height: 100,  
                            borderRadius: 8,
                            overflow: "hidden",
                            marginBottom: 16
                        }}
                        resizeMode="cover" />
                </View>
                <View style={{justifyContent: "center", flexDirection: "row", marginBottom: 16}}>
                    <MaterialIcons style={{marginHorizontal: 16}} name="photo-camera" size={24} color="#333333" />
                    <BtnImg aspectoLargura={1500} aspectoAltura={500} funcaoPressionar={result => setFotoBanner(result)} />
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