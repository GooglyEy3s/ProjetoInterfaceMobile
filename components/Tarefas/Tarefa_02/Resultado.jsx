import { View, Text, TextInput, Button, Pressable} from "react-native";
import MyStyle from "./Styles";

const calculo = (peso,altura) => {
    var IMC = peso/(altura^2)
    if(IMC<17){
        return (
            "Muito abaixo do peso"
        )
    }else if(IMC>=17 && IMC<18.49){
        return (
            "Abaixo do peso"
        )
    }else if(IMC>=18.5 && IMC<24.99){
        return (
            "Peso normal"
        )
    }else if(IMC>=25 && IMC<29.99){
        return (
            "Acima do peso"
        )
    }else if(IMC>=30 && IMC<34.99){
        return (
            "Obesidade I"
        )
    }else if(IMC>=35 && IMC<39.99){
        return (
            "Obesidade II(severa)"
        )
    }else if(IMC>=40){
        return (
            "Obesidade III(mórbida)"
        )
    }
    
}

const Resultado = ({navigation,route}) => {
    var IMC = route.params?.Peso/(route.params?.Altura^2)
    
    return (
        <View style={MyStyle.container}>
            <Text style={MyStyle.title}>Seu IMC é: {IMC}</Text>
            <Text style={MyStyle.title}>{calculo(route.params?.Peso, route.params?.Altura)}</Text>
            <Pressable style = {MyStyle.button} onPress={() => navigation.navigate("Home")}> 
                <Text style = {MyStyle.buttonText}>HOME</Text> 
            </Pressable>
        </View>
    )
}

export default Resultado