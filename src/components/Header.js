import React from 'react'
import { StyleSheet, View, StatusBar, Platform} from 'react-native'
import Logo from './Logo'

import { MaterialIcons } from '@expo/vector-icons'

export default props =>{

    return(
        <View style={style.HeaderContainer}>
            <MaterialIcons name="search" size={40} color="#333333" />
            <Logo largura={48} altura={48} />
            <MaterialIcons name="settings" size={40} color="#333333"/>
        </View>
    )
}
const style = StyleSheet.create({
    HeaderContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 16,
    }
})