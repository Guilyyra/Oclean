import { Alert, Platform } from 'react-native'

const server = 'http://192.168.15.28:3000'

function showError(err){
    Alert.alert('Ops! Ocorreu um Problema!', `${err.response.data ? err.response.data : err.response}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess}