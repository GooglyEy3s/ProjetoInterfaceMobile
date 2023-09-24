import {View,Text,TextInput, StyleSheet} from "react-native"
import { useState } from "react"

const MyTextInput = () => {
    const [frase, SetFrase] = useState ("")

    return(
        <View style = {estilos.view}>
            <Text style = {estilos.header}>Escreve se não coisa</Text>
            <TextInput style={estilos.input} placeholder="Digita vai digita" defaultValue={frase} onChangeText={(texto)=> SetFrase(texto)} />
            <Text style = {estilos.frase}>
                {frase.split(" ").map((palavra) => palavra && "🤭")}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        view:{
            flex:1,
            
            backgroundColor: "purple",
            justifyContent:"center",
            alignItems:"center",
            width:"100%"

            
        },
        input:{
            height:50,
            borderColor:"white",
            borderWidth:2,
            fontSize:22,
            paddingLeft:10,
            color: "white",
            width:"80%"
        },
        header:{
            marginBottom:10,
            fontSize:60,
            fontWeight:"bold",
            color:"white"
        },
        frase:{
            fontSize:40,
            fontWeight:"bold",
            color:"white",
            paddingTop:40
            
        }

    }
)
export default MyTextInput