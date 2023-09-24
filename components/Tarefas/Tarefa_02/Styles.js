import {StyleSheet} from "react-native"

const MyStyle = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        height:40,
        width:"80%",
        borderColor:"lightblue",
        borderWidth:2,
        borderRadius:5,
        padding:5,
        marginBottom:15
    },
    button:{
        backgroundColor:"dodgerblue",
        width:"80%",
        height:"5%",
        color:"white",
        justifyContent:"center",
        alignItems:"center",
        marginTop: 15,
        borderRadius: 12,
        
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
    },
    text:{
        width:"80%",
        height:"auto",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"lightblue",
        borderWidth:2,
        borderRadius:5,
        padding:30,
        
    },
    perfilImage: {
        height: 150,
        width: 150,
        borderRadius: 20,
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        marginLeft:20,
        color: "dodgerblue"
    },
    perfil:{
        width:"80%",
        flexDirection:"row",
        
    },
    respon:{
        fontWeight: "bold",
        fontSize: 10,
        marginLeft:20,
        color: "dodgerblue"
        
    }

})

export default MyStyle