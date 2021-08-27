import { StyleSheet } from "react-native";

export default StyleSheet.create({

    // WELCOME
    welcomeWrapper:{
        height: "70%",
    },
    logo: {
        width: 100,
        height: 100
    },
    welcomeContainer: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        width: 350,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23
    },

    welcomeTitle: {
        fontSize: 24,
        color: "white"
    },
    welcomeButton: {
        width: "70%",
        padding: 5,
        marginTop: 24,
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#63E1FD",
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,

            
    },
    //FIM WELCOME
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