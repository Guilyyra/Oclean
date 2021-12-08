import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'

import Btn from './Btn'

import axios from 'axios'
import { server, showError } from '../comum'

export default props => {

    const id_comu = props.id_comu
    const style = props.style || {}
    const navigation = props.navigation

    const [comu,setComu] = useState({
        nome_comu: '',
        banner_comu: `${server}/img/placeholder.png`,
        foto_perfil_comu: `${server}/img/placeholder.png`
    })

    const getComu = async() => {
        try{
            const resComu = await axios.get(`${server}/comunidades/id/${id_comu}`)
            setComu(resComu.data[0])
        } catch(e) {
            showError(e)
        }
    }
    if(!comu.id_comu){
        getComu()
    }


    return(
        <TouchableOpacity style={[style, {width: '80%', borderRadius: 20, marginBottom: 40}]} onPress={() => navigation.navigate("Comunidade", {nome_comu: comu.nome_comu})}>
            <ImageBackground 
                source={{ uri: comu.banner_comu.replace(/"/g, "")}} 
                style={{
                    width: '100%',
                    overflow: 'visible',
                    borderRadius: 20,
                    elevation: 20,
                    backgroundColor: 'white'}}
                imageStyle={{height: 80,borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Image 
                        source={{ uri: comu.foto_perfil_comu.replace(/"/g, "")}} 
                        style={{
                            width: 80,
                            height: 80,
                            marginTop: 25,
                            marginLeft: 16,
                            borderRadius: 100   
                        }}
                    resizeMode="cover"/>
                    <View style={{marginTop: 88, marginLeft: 16, marginBottom: 24}}>
                        <Text style={{fontSize: 10, color: 'rgba(51, 51, 51, 0.75)'}}>Comunidade</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#333333'}}>{comu.nome_comu}</Text>
                        <Text style={{fontSize: 12, color: '#333333'}}>{comu.descricao_comu}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    }
})