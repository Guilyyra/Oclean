import React from 'react'
import { Text,  StyleSheet, TextInput} from 'react-native'

import estilo from './estilo';

export default ({inputPlaceholder}) => {

    return (
        <>
            <TextInput 
                style={estilo.input}
                placeholder={inputPlaceholder}
            />
        </>
    )
}

