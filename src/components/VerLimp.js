import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import VoltarBtn from './VoltarBtn'
import estilo from './estilo'
import BtnImg from './BtnImg'
import IptFundo from './InputFundo'
import Btn from './Btn'
import { uploadFoto } from '../components/imgComum'

export default props => {
    const fechar = props.fechar || null
    const sin = props.sin || null
    const dono_limpo = props.dono_limpo || null

    const foto = { uri: sin.foto_limp.replace(/"/g, "") }
    const desc = sin.desc_limp

    return(
        <View style={style.fundo}>
            <View style={style.container}>
                <VoltarBtn 
                    titulo={<MaterialIcons name="arrow-back" size={18} color="#333333" />}
                    navegacao={props.navigation}
                    style={estilo.VoltarBtn}
                    funcaoPressionar={fechar} />
                <Text style={style.titulo}>Limpeza</Text>

                <View style={{ width: "100%", alignItems: "center"}}>
                        {foto &&
                            <Image 
                                source={foto} 
                                style={{
                                    maxWidth: "100%",
                                    width: "80%",
                                    height: 150,  
                                    marginBottom: 16,
                                    borderRadius: 20
                            }}
                            resizeMode="cover" />}

                    </View>

                    <View style={{width: "80%", marginBottom: 16}}>
                        <Text style={{color: "#333333", fontSize: 22, marginBottom: 8, fontWeight: "bold"}}>Descrição</Text>
                        <Text style={{fontSize: 16, color: "#333333"}}>{desc}</Text>
                    </View>

                    <View style={{width: '80%',flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
                        <Image 
                            source={require('../img/oclean_logo.png')}
                            style={{
                                width: 30,
                                height: 30,
                                marginRight: 12,
                            }}
                            resizeMode="cover"
                        />
                        <Text style={{color: "#333333", fontSize: 16}}>Limpo por {dono_limpo.nome_usu}</Text>
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
        alignItems: "center",

        backgroundColor: "rgba(51, 51, 51, 0.5)",
        
        elevation: 19
    },
    container: {
        width: "80%",
        alignItems: "center",

        backgroundColor: "white",
        borderRadius: 20,
    },
    titulo: {
        marginTop: 25,
        marginBottom: 16,

        fontSize: 23,
        fontWeight: "bold",
        color: "#333333"
    },
})