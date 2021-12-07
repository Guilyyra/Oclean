import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import VoltarBtn from './VoltarBtn'
import estilo from './estilo'
import BtnImg from './BtnImg'
import IptFundo from './InputFundo'
import Btn from './Btn'
import CadastrarLimp from './CadastrarLimp'
import VerLimp from './VerLimp'
import { uploadFoto } from '../components/imgComum'

export default props => {

    const id_usu = props.id_usu
    const ImgPerfil = require('../img/oclean_logo.png')
    const funcaoVoltar = props.funcaoVoltar || null
    const sin = props.sin

    const ImgUserPlaceholder = `${server}/img/user_placeholder.png`

    const [dono, setDono] = useState({
        nome_usu: "carregando...",
        foto_perfil: ''
    })
    const [donoLimpo, setDonoLimpo] = useState({
        nome_usu: "carregando...",
        foto_perfil: ''
    })

    const [cadastrarLimp, setCadastrarLimp] = useState(false)
    const [verLimp, setVerLimp] = useState(false)

    const getSinalizacao = async () => {
        try{
            const dono = await axios.get(`${server}/usuarios/${sin.id_usu_dono}`)
            setDono(dono.data[0])
            if(sin.status_sin == "limpo"){
                const dono = await axios.get(`${server}/usuarios/${sin.id_usu_limpo}`)
                setDonoLimpo(dono.data[0])
                console.log(dono.data[0])
            }
        }catch(erro){
            console.log(erro)
        }
    }
    if(dono.nome_usu == "carregando..."){
        getSinalizacao()
    }

    const renderStatus = () => {
        if(sin.status_sin == 'sujo'){
            return( 
            <>
                <MaterialIcons name="close" marginTop={8} size={28} color="#e00b0b"/>
                <Text style={{color: "#e00b0b", fontSize: 22}}>Sujo</Text>
            </>)
        }else{
            return(
            <>
                <MaterialIcons name="done-outline" marginTop={8} size={28} color="#039600"/>
                <Text style={{color: "#039600", fontSize: 22}}>Limpo</Text>
            </>)
        }
    }

    const getDate = (date) => {
        horario = parseInt(date.slice(11,13)) - 3 + date.slice(13,16)
        return date.slice(8, 10) + "/" + date.slice(5,7) + "/" + date.slice(2,4) + " " + horario
    }

    return(
        <View style={style.fundo}>
            <View style={style.Container}>
                <VoltarBtn 
                    titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                    style={estilo.VoltarBtn}
                    funcaoPressionar={funcaoVoltar} />
                <Text style={style.titulo}>Sinalização</Text>

                <Image  
                    source={{uri: sin.foto_sin.replace(/"/g, "")}} 
                    style={{
                        width: "80%",
                        height: 100,
                        borderRadius: 8,
                        marginBottom: 16
                        }}
                    resizeMode="cover" />
                
                <View style={style.InformacaoContainer}>
                    <Text style={{color: "white", fontSize: 22, marginBottom: 8}}>Localização</Text>
                    <Text style={{color: "white", fontSize: 16}}>{sin.praia_sin} - {sin.cidade_sin}</Text>
                </View>

                <View style={style.InformacaoContainer}>
                    <Text style={{color: "white", fontSize: 22, marginBottom: 8}}>Referencia</Text>
                    <Text style={{color: "white", fontSize: 16}}>{sin.ref_sin}</Text>
                </View>

                <View style={[style.InformacaoContainer, {flexDirection: 'row', alignItems: 'center'}]}>
                    <Text style={{color: "white", fontSize: 22}}>Status: </Text>
                    {renderStatus()}
                </View>

                <View style={{width: '80%',flexDirection: 'row', alignItems: 'center'}}>
                    <Image 
                        source={{ uri: !dono.foto_perfil ? ImgUserPlaceholder : dono.foto_perfil.replace(/"/g, "")}}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 12,  
                            borderRadius: 15             
                        }}
                        resizeMode="cover"
                    />
                    <Text style={{color: "white", fontSize: 12}}>Sinalizado por {dono.nome_usu} · {getDate(sin.data_sin)}</Text>
                </View>

                {sin.status_sin == "limpo" && <View style={{width: '80%',flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
                    <Image 
                        source={{ uri: !donoLimpo.foto_perfil ? ImgUserPlaceholder : donoLimpo.foto_perfil.replace(/"/g, "")}}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 12,    
                            borderRadius: 15           
                        }}
                        resizeMode="cover"
                    />
                    <Text style={{color: "white", fontSize: 12}}>Limpo por {donoLimpo.nome_usu} · {getDate(sin.data_limp)}</Text>
                </View>}
                
                
                <Btn estilo={style.btnLimpar} 
                    corFonte="#333333" 
                    titulo={sin.status_sin == "sujo" ? "Limpar" : "Ver Limpeza"} 
                    tamanhoFonte={20} 
                    funcaoPressionar={async () => {
                        if(sin.status_sin == "sujo"){
                            setCadastrarLimp(!cadastrarLimp)
                        } else {
                            setVerLimp(!verLimp)
                        }
                }} />

                {sin.id_usu_dono == id_usu && 
                <Btn estilo={style.btnDeletar} titulo="Deletar" tamanhoFonte={20} funcaoPressionar={async () => {
                    deletar = await axios.delete(`${server}/sinalizacao/${sin.id_sin}/deletar`)
                    funcaoVoltar()
                }} />}

                {verLimp && 
                    <VerLimp fechar={() => setVerLimp(false)} sin={sin} dono_limpo={donoLimpo} />}

                {cadastrarLimp && 
                    <CadastrarLimp fechar={() => setCadastrarLimp(false)} id_sin={sin.id_sin} id_usu={props.id_usu} terminar={funcaoVoltar} />}

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    fundo:{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",

        backgroundColor: "rgba(51, 51, 51, 0.5)",

        elevation: 8
    },
    Container: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "80%",
        bottom: 0,
        alignItems: "center",

        backgroundColor: "#63E1FD",

        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    },
    titulo: {
        marginTop: 25,
        marginBottom: 16,

        fontSize: 23,
        fontWeight: "bold",
        color: "white"
    },
    InformacaoContainer: {
        width: "80%",
        marginBottom: 16
    },
    btnDeletar: {
        height: 40,
        width: "55%",

        backgroundColor: "#e00b0b"
    },
    btnLimpar: {
        height: 40,
        width: "55%",
        marginTop: 24,
        marginBottom: 40,

        backgroundColor: "white",
    }
})