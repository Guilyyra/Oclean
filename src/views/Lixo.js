import React, { useState } from 'react'
import { View, Image, Button, Platform  } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import BtnImg from '../components/BtnImg';
import Btn from '../components/Btn';
import Header from '../components/Header'



export default props => {

    return(
    <View style={{ flex: 1}}>
        <Header navegacao={props.navigation} />
        <Btn marginVertical={20} funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: "Comunidade%20das%20folhas%205"})} />
        <Btn marginVertical={20} funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: "Comunidade%20das%20folhas%206"})} />
        <Btn marginVertical={20} funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: "Comunidade%20das%20folhas0"})} />
        <Btn marginVertical={20} funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: "Comunidade%20das%20folhas%20poze"})} />
    </View>
    )
}