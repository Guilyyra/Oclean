import React from 'react'
import { View,StyleSheet } from 'react-native'
import Estilo from './estilo'

export default props => (
    <View style={style.MenuContainer}>
        {props.children}
    </View>
)

const style = StyleSheet.create({
    MenuContainer: {
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        minHeight: "58%",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23
    },
})