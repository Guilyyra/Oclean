import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    // Geral
    Flex1:{
        flex: 1
    },
    inputTitulo:{
        alignSelf: "flex-start",
        marginLeft: "10%",
        fontSize: 18,
        color: "rgba(50, 50, 50, 0.6)",
    },
    // Bem Vindo, login e cadastro
    MenuContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23
    },
    MenuTitulo: {
        color: "#333333",
        fontSize: 24,
        paddingTop: 16,
        paddingBottom: 24
    },
    inputText:{
        width: "70%"
    },
})