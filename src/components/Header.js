import React from 'react'
import { StyleSheet, View, StatusBar, Platform } from 'react-native'
import Logo from './Logo'

import Btn from './Btn'

import { MaterialIcons } from '@expo/vector-icons'

export default props => (
    <View style={style.HeaderContainer}>
        <Btn
            largura={24}
            altura={24}
            svg={<MaterialIcons name="search" size={24} color="#333333" />}
            somenteTexto={true}
            somenteSvg={true} />
            
        <Logo lado={40} />
            
        <Btn
            largura={24}
            altura={24}
            svg={<MaterialIcons name="settings" size={24} color="#333333"/>}
            somenteTexto={true}
            somenteSvg={true}
            funcaoPressionar={() => { props.navegacao.navigate("Configuracoes") }}/>
            {/* Tentar contornar essa obrigatoriedade de colocar o navegacao
                por parte do <header> nas telas que o usam
            */}
    </View>
)

const style = StyleSheet.create({
    HeaderContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 16 : 0,
        marginBottom: 24,
        paddingHorizontal: 16,
    }
})