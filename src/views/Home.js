import React from 'react'
import { ScrollView, StyleSheet, View  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import AsyncStorage from '@react-native-async-storage/async-storage'

import estilo from '../components/estilo'
import Header from '../components/Header'
import Post from '../components/Post'
import Btn from '../components/Btn'

export default  props => {
    
    return(
        <>
            <View style={style.addBtn}>
                
                   <Btn
                   altura="100%"
                   largura="100%"
                   svg={<MaterialIcons name="create" size={24} color="#fff" />}
                   somenteSvg={true}
                   borderRadius={400}
                   funcaoPressionar={() => {console.log("aaa")}}/>
            </View>
            <ScrollView style={estilo.Flex1} >
                <Header navegacao={props.navigation} />
                <View style={style.Container}>
                    <Post postTitulo="Tubarão 🐳👍" imgPost={require("../img/post_img.jpg")}/>
                    <Post postTitulo="Praia 🏜" />
                    <Post postTitulo="Minha história" postDescricao="Hoje eu estava passeando e encontrei um cachorro, pe..." />
                    <Post postTitulo="Praia 🏖" />
                </View>
            </ScrollView>
        </>
    )
}
const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    addBtn: {
        position: "absolute",
        width: 65,
        height: 65,
        bottom: 16,
        right: 16,
        zIndex: 1
    }
})
