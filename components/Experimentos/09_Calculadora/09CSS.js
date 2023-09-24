import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    container: {
        flex:1,
        width:"100%",
        flexDirection:"column",
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    },
    header: {
        fontSize:22,
        fontWeight:"bold",
        marginBottom:20
    },
    input:{
        height:40,
        width:"80%",
        borderColor:"black",
        borderWidth:2,
        borderRadius:5,
        padding:5
    },
    operacoes:{
        flexDirection:"row",
        marginTop:"5%",
        height:40,
        width:300,
        justifyContent:"space-evenly"
    }
})

export default estilos