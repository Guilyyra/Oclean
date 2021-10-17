import React, { useState } from 'react'
import { View, Image, Button, Platform  } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import BtnImg from '../components/BtnImg';
import estilo from '../components/estilo'
import Header from '../components/Header'



export default props => {

    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BtnImg id={props.route.params.id_usu} ></BtnImg>
    </View>
    )
}