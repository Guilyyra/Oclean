import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    // Bem Vindo
    MenuContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 250,
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
    //FIM - Bem Vindo
    // Login
    inputTitle:{
      width: "70%",
      fontSize: 18,
      color: "rgba(50, 50, 50, 0.6)",
      marginBottom: 0,
    },
    inputText:{
        width: "70%",
    },
    input:{
        width: "70%",
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 16,
    }
})