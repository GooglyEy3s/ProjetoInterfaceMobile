import {View,Text,TextInput, StyleSheet,Button} from "react-native"
import { useState } from "react"

const Atividade = () => {
    const [frase, SetFrase] = useState ("")
    const [frase2, SetFrase2] = useState ("")
    const [frase3, SetFrase3] = useState ("")


    return(
        <View style = {estilos.view}>
            <Text style = {estilos.header}>Escreve nome</Text>
            <TextInput style={estilos.input} placeholder="Digita seu primeiro nome" defaultValue={""} onChangeText={(texto)=> SetFrase(texto)} />
            <TextInput style={estilos.input} placeholder="Digita seu segundo nome" defaultValue={""} onChangeText={(texto)=> SetFrase2(texto)} />
            
            <Text style = {estilos.frase}>
               
                {frase3}
            </Text>
            <Button  title="Coisar" onPress={() => {SetFrase3(frase+ " " + frase2 + " 🙄")}}/>
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
export default Atividade