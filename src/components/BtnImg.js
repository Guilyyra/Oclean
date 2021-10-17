import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'

import { uploadFoto } from './imgComum';

import { server, showError } from '../comum'
import axios from 'axios';

export default props => {
    const id_usu = props.id || 0
    const setFoto = props.setFoto ? props.setFoto : _ => {}

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
            setFoto(result)
        }
      };

    return (
        <TouchableOpacity onPress={handleChoosePhoto} >
            <MaterialIcons name="insert-photo" size={24} color="#333333" />
        </TouchableOpacity>
    )
}