import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, View, Text, TouchableOpacity, ImageBackground, StatusBar  } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

//import axios from 'axios'
import axios from 'axios'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import Btn from '../components/Btn'
import Ipt from '../components/Input'
import VoltarBtn from '../components/VoltarBtn'

import moment from 'moment';
import "moment/min/locales";

import { uploadFoto } from '../components/imgComum'

import { server, showError } from '../comum'

export default props => {

    const parametros = props.route.params
    const comu = parametros.comu

    const [ImgPerfil, setImgPerfil] = useState({ uri: comu.foto_perfil_comu.replace(/"/g, "")})
    const [ImgBanner, setImgBanner] = useState({ uri: comu.banner_comu.replace(/"/g, "")})

    const handleChoosePhoto = async (funcao, aspecto) => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: aspecto,
          quality: 1,
        });
    
        if (!result.cancelled) {
            funcao(result)
        }
      };

      const [nome, setNome] = useState(comu.nome_comu)
      const [desc, setDesc] = useState(comu.descricao_comu)

      const editar = async() => {
        try{
            if(ImgPerfil != { uri: `${server}/img/placeholder.png`}){
                linkFotoPerfil = await uploadFoto(ImgPerfil, 'foto_perfil_comunidade', comu.id_comu)
            }else{
                linkFotoPerfil = ""
            }
            if(ImgBanner != { uri: `${server}/img/placeholder.png`}){
                linkFotoBanner = await uploadFoto(ImgBanner, 'foto_banner_comunidade', comu.id_comu)
            }else{
                linkFotoBanner = ""
            }
            const resComu = await axios.put(`${server}/comunidades/${comu.id_comu}/alterar`, {
                nome_comu: nome,
                descricao_comu: desc,
                banner_comu: linkFotoBanner,
                foto_perfil_comu: linkFotoPerfil
            })
            props.navigation.goBack()
        }catch(e){ 
            showError(e)
        }
      }


    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Header navegacao={props.navigation} />
            <ImageBackground
                source={ImgBanner} 
                 style={{ 
                    width: "100%", 
                    height: 100,  
                    borderRadius: 8,
                    overflow: "hidden",
                    marginBottom: 16,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    overflow: 'visible'
                }}
                resizeMode="cover">
                    <VoltarBtn 
                        titulo={<MaterialIcons name="arrow-back" size={18} color="#333333"/>}
                        navegacao={props.navigation}
                        style={estilo.VoltarBtn} 
                    />
                    <Btn  
                        titulo={"Editar banner"} 
                        funcaoPressionar={_ => handleChoosePhoto(setImgBanner, [1500,500])} 
                        tamanhoFonte={16} 
                        estilo={style.btnBanner}
                        largura={120} 
                        altura={40}
                        borderRadius={20}
                    />
            </ImageBackground>

            <View style={{width: '100%', alignItems: 'center', marginTop: 40}} >
                <Image 
                    source={ImgPerfil} 
                    style={style.ImgPerfil}
                    resizeMode="cover" />
                <Btn  
                    titulo={"Editar foto"} 
                    funcaoPressionar={_ => handleChoosePhoto(setImgPerfil, [1,1])} 
                    tamanhoFonte={16} 
                    largura={120}
                    estilo={{marginTop: 16}}
                    altura={40}
                    borderRadius={20}
                />
            </View>
            <View style={{width: '90%', marginLeft: '5%', marginTop: 24}}>
                <Text style={[style.TituloIpt, {alignSelf: "flex-start"}]}>Nome:</Text>
                <Ipt placeholder="Ex: Jorge João Carlos" escondido={false} largura="100%" valor={nome} setValor={setNome}/>
                <Text style={[style.TituloIpt, {alignSelf: "flex-start"}]}>Descrição:</Text>
                <Ipt placeholder="Escreva sobre você!" multiline={true} escondido={false} altura={50} largura="100%" valor={desc} setValor={setDesc}/>

                <Btn  
                    titulo={"Editar"} 
                    funcaoPressionar={_ => editar()} 
                    tamanhoFonte={16} 
                    largura={120}
                    estilo={{marginTop: 16, marginBottom: 24, alignSelf: 'center'}}
                    altura={40}
                    borderRadius={20}
                />
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    ContainerTextos: {
        marginLeft: '31%',
        paddingLeft: 32,
    },
    ContainerImgPerfil: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 3,
        borderColor: '#63E1FD',
        backgroundColor: 'white',
        position: 'absolute',
        left: 36,
        top: 70,
        borderRadius: 100,
    },
    BotaoDescricao: {
        marginLeft: 30, 
        marginTop: 60,
    },
    TextoDescricao: {
        paddingHorizontal: 16,
        width: '60%'
    },
    ImgPerfil: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    ContainerDescricao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    btnBanner: {
        marginBottom: -20,
        marginRight: 24
    },
    TituloIpt: {
        fontSize: 18,
        color: "rgba(51, 51, 51, 0.6)"
    }

})
