import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'
import { createIconSetFromFontello } from 'react-native-vector-icons';

export default props => {
    const id_usu = props.id || 0
    const funcaoPressionar = props.funcaoPressionar ? props.funcaoPressionar : _ => {}
    const aspectoAltura = props.aspectoAltura || null
    const aspectoLargura = props.aspectoLargura || null
    const cor = props.cor || "#333333"
    const permitirEdicao = props.permitirEdicao == null ? true : props.permitirEdicao

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: permitirEdicao,
          aspect: [aspectoLargura, aspectoAltura],
          quality: 1,
        });
    
        if (!result.cancelled) {
            funcaoPressionar(result)
        }
      };

    return (
        <TouchableOpacity onPress={handleChoosePhoto} >
            <MaterialIcons name="insert-photo" size={24} color={cor} />
        </TouchableOpacity>
    )
}