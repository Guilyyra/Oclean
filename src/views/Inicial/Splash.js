import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import LogoImg from '../../img/oclean_logo.png'
import estilo from '../../components/estilo'

export default class AuthOrApp extends Component {

    

    componentDidMount = async () => {
        const userDataJson = await AsyncStorage.getItem('userData')
        let userData = null
        try{
            userData = JSON.parse(userDataJson)
        } catch(e) {
            // userData está inválido
        }
        
        if(userData && userData.token) {
            axios.defaults.headers.common["Authorization"] = `bearer ${userData.token}`
            this.props.navigation.navigate("Tab", userData)
        } else {
            this.props.navigation.navigate("BemVindo")
        }
    }

    render() {
        return (
            <View style={[estilo.Flex1, { justifyContent: 'center', alignItems: 'center'} ]}>
                <Image source={LogoImg} style={{ width: '30%' }} resizeMode='contain' />
            </View>
        )
    }
}