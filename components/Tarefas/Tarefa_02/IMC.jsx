import { View, Text, TextInput, Button, Pressable} from "react-native";
import { useEffect, useState } from "react"
import MyStyle from "./Styles";


const IMC = ({navigation}) => {
    const [Peso,SetPeso] = useState(0)
    const [Altura,SetAltura] = useState(0)

    return(
        <View style = {MyStyle.container}>
            <TextInput style = {MyStyle.input} placeholder="Digita seu peso"  onChangeText={(x) => SetPeso(x)}/>
            <TextInput style = {MyStyle.input} placeholder="Digita sua altura" onChangeText={(x) => SetAltura(x)} />
            <Pressable style = {MyStyle.button} onPress={() => navigation.navigate("Resultado",{Peso:Peso,Altura:Altura})}> 
                <Text style = {MyStyle.buttonText}>OK!</Text> 
            </Pressable>
        </View>
    )
}

export default IMC