import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    viewApp: {
        flex: 6,
        flexDirection: "column",
        // alignContent:"space-between",
        // justifyContent:"space-between",
    },

    caixaHeader: {
        backgroundColor: "blue",
        flex: 2,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        height: 100,
    },
    viewHeader: {
        backgroundColor: "red",
        elevation: 20,
        width: "auto",
        height: 40,
        alignItems: "center",
    },

    textHeader: {
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        paddingHorizontal: 3,
        paddingHorizontal: 5,
    },
    caixaSaudacao: {
        marginHorizontal: 30,
        padding: 50,
    },
    viewSaudacao: {
        // backgroundColor:"green",
        width: "auto",
        fontSize: 24,


        marginTop: 20,

    },

    textSaudacao: {
        textAlign: "center",
        // padding:10,
        fontSize: 24,
        fontWeight: "bold",
    },

    caixaContent: {
        height: "auto",
        backgroundColor: "#DC143C",
        // justifyContent:"center",
        alignItems: "center",
        marginVertical: 10,
    },

    viewContent: {
        height: "auto",
        width: "auto",
        backgroundColor: "red",
        textAlign: "justify",
        flexDirection: "column",
        marginHorizontal: 20,
        marginVertical: 10,

    },
    caixaImc: {
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "#90EE90",
        flex: 1,
        flexDirection: "column",
        width: "auto",
        height: "auto",
    },
    viewImc: {

        flexDirection: "column",
        alignContent: "space-between",
        alignItems: "center"
    },
    visorTxt: {
        borderWidth: 1,
        borderRadius: 30,
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },

    viewFooter: {
        backgroundColor: "blue",
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    txtFooter:{
        color: 'white',
        textAlign:'center'
    },

    viewBorder: {
        padding: 20,
        backgroundColor: 'white',
        margin: 10,
        alignContent: 'center',
        justifyContent: 'center'

    },
    viewBorderImc: {
        padding: 50,
        backgroundColor: 'white',
        marginVertical: 10,


    },


    botoes: {
        width: 200,
        padding: 10,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "#1E90FF",
        fontSize: 16,


    },
    textBotao: {
        textAlign: 'center',

    },

    txtTitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:10,
    },
    txtAutor: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 10,
    },

    txtSubtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical:10,
    },

    txtConteudo: {
        fontSize: 17,
        textAlign: 'justify',
    },

    txtResposta: {
        fontSize: 16,
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'justify',
    },

    img: {
        width: 250,
        height: 200,
        resizeMode: 'stretch',
        maxWidth: 400,
        marginTop: 20,
    }

})