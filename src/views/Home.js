import React from 'react'
import { SafeAreaView, StyleSheet, View  } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import estilo from '../components/estilo'
import Header from '../components/Header'
import Post from '../components/Post'

export default props => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <Header />
            <View style={style.Container}>
                <Post />
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    }
})
