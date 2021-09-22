import React from 'react'
import { ScrollView, StyleSheet, View  } from 'react-native'

import estilo from '../components/estilo'
import Header from '../components/Header'
import Post from '../components/Post'

export default props => {
    return(
        <ScrollView style={estilo.Flex1} >
            <Header navegacao={props.navigation} />
            <View style={style.Container}>
                <Post postTitulo="Tubarão 🐳👍" imgPost={require("../img/post_img.jpg")}/>
                <Post postTitulo="Praia 🏜" />
                <Post postTitulo="Minha história" postDescricao="Hoje eu estava passeando e encontrei um cachorro, pe..." />
                <Post postTitulo="Praia 🏖" />
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    }
})
