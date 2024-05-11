import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import Estilo from './estilo'
import { MaterialIcons } from '@expo/vector-icons'

export default props => {

    const realizado = props.realizado || false
    const color = [{color: realizado ? '#039200' : '#FEDB41'}]

    return(
        <View style={style.postContainer}>
            <View style={{elevation: 20, backgroundColor: 'white', width: 70, borderRadius: 20, marginRight: 20,}}>
                <Image source={{uri: "http://192.168.15.10:3000/img/praia2.jpg"}} 
                style={{
                    width: 70, 
                    height: 50,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#FEDB41',

                    }}/>
            </View>
            <View>
                <Text>
                    Mutirão Praia Copacabana
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[{fontSize: 16}, color]}>                         
                        <MaterialIcons name={realizado ? 'check-circle-outline' : 'radio-button-unchecked'}  /> 
                        {realizado ? ' Realizado' : ' Agendado'}
                    </Text>                       
                    <Text style={{ fontSize: 16, color: "rgba(51, 51, 51, 0.6)"}}> · 17/06/21- 14:30</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    postContainer: {
        width: '90%',
        height: 'auto',
        marginBottom: 40,
        borderRadius: 16,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
})