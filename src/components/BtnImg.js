import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'

export default props => {
    const id_usu = props.id || 0
    const setFoto = props.setFoto ? props.setFoto : _ => {}
    const aspectoAltura = props.aspectoAltura || 3
    const aspectoLargura = props.aspectoLargura || 4
    const cor = props.cor || "#333333"


    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [aspectoLargura, aspectoAltura],
          quality: 1,
        });
    
        if (!result.cancelled) {
            setFoto(result)
        }
      };

    return (
        <TouchableOpacity onPress={handleChoosePhoto} >
            <MaterialIcons name="insert-photo" size={24} color={cor} />
        </TouchableOpacity>
    )
}