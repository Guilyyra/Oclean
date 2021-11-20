import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import axios from 'axios'
import { server, showError } from '../comum'

import VoltarBtn from './VoltarBtn'
import estilo from './estilo'
import BtnImg from './BtnImg'
import IptFundo from './InputFundo'
import Btn from './Btn'
import { uploadFoto } from '../components/imgComum'

export default props => {
    const funcaoVoltar = props.funcaoVoltar || null
    const funcaoTerminar = props.funcaoTerminar || null

    const [foto, setFoto] = useState({ uri: `${server}/img/banner.png`})
    const [teclado, setTeclado] = useState(false)
    const [medidasTeclado, setMedidasTeclado] = useState({})

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          (e) => {
            const { height, screenX, screenY, width } = e.endCoordinates
            setMedidasTeclado({position: "absolute", bottom: height / 2})
            setTeclado(true)}
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {setMedidasTeclado({})
            setTeclado(false)}
        );
    
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
    }, []);

    const [praia, setPraia] = useState("")
    const [cidade, setCidade] = useState("")
    const [ref, setRef] = useState("")

    const cadastrarSinalizacao = async () => {
        try{
            linkFoto = await uploadFoto(foto, 'foto_sinalizacao', props.id_usu)
            const res = await axios.post(`${server}/sinalizacao/cadastrar`, {
                latitude_sin: props.latitude_sin,
                longitude_sin: props.longitude_sin,
                data_sin: new Date(),
                praia_sin: praia,
                cidade_sin: cidade,
                ref_sin: ref,
                status_sin: "sujo",
                foto_sin: linkFoto,
                id_usu_dono: props.id_usu
            })

            funcaoTerminar()

        } catch(erro){
            console.log(erro)
        }
    }

    return(
        <View style={style.fundo}>
            <View style={[style.Container, teclado ? {height: "100%"} : {}]}>
                <View style={[{width: "100%", height: "100%", alignItems: "center"}, medidasTeclado]}>
                    <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn}
                        funcaoPressionar={funcaoVoltar} />
                    <Text style={style.titulo}>Adicionar Sinalização</Text>

                    <View style={{width: "80%"}}>
                        <Text style={{color: "white", fontSize: 22, marginBottom: 8}}>Adicionar Foto</Text>
                        <Image 
                            source={foto} 
                            style={{
                                width: "100%",
                                height: 100,
                                borderRadius: 8
                            }}
                            resizeMode="cover" />
                    </View>
                    <View style={{justifyContent: "center", flexDirection: "row", marginTop: 8}}>
                        <MaterialIcons style={{marginHorizontal: 16}} name="photo-camera" size={24} color="white" />
                        <BtnImg cor="white" aspectoLargura={1500} aspectoAltura={500} funcaoPressionar={setFoto} />
                    </View>
                    
                    <View style={{width: "80%"}}>
                        <Text style={{color: "white", fontSize: 22, marginBottom: 8}}>Informações</Text>
                        <View style={{flexDirection: "row"}}>
                            <View style={{width: "49%"}}>
                                <Text style={{color: "white", fontSize: 18, marginBottom: 8}}>Praia</Text>
                                <IptFundo placeholder="Ex: Copacabana" largura="100%" valor={praia} setValor={setPraia}/>
                            </View>
                            <View style={{width: "49%", marginLeft: "2%"}}>
                                <Text style={{color: "white", fontSize: 18, marginBottom: 8}}>Cidade</Text>
                                <IptFundo placeholder="Ex: Rio de Janeiro" largura="100%" valor={cidade} setValor={setCidade}/>
                            </View>
                        </View>
                        <View style={{width: "100%"}}>
                            <Text style={{color: "white", fontSize: 18, marginBottom: 8}}>Ponto de referência</Text>
                            <IptFundo placeholder="Ex: Perto do quiosque" largura="100%" altura={60} multiline={true} valor={ref} setValor={setRef} />
                        </View>
                    </View>
                    <Btn 
                            titulo="Enviar" 
                            largura="60%" 
                            estilo={{backgroundColor: "white"}}
                            corFonte="#333333"
                            marginVertical={8} 
                            funcaoPressionar={cadastrarSinalizacao}/>
                </View>
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

        backgroundColor: "#63E1FD",

        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    },
    titulo: {
        marginTop: 20,
        marginBottom: 16,

        fontSize: 23,
        fontWeight: "bold",
        color: "white"
    }
})