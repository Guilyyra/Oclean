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
        <Btn funcaoPressionar={_ => props.navigation.navigate("Comunidade", { nome_comu: "Comunidade%20das%20folhas%203"})} />
    </View>
    )
}