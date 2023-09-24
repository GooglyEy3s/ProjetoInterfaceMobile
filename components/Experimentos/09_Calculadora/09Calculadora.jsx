import { View, Text, TextInput, Button, Pressable} from "react-native";
import { useState } from "react";
import estilos from "./09CSS";
import Botao from "./MyPressable";


const Calculadora = () => {
    const [numero1,Setnumero1] = useState('1')
    const [numero2,Setnumero2] = useState('2')
    const [resultado,Setresultado] = useState('')

    const somar = () => {
        Setresultado(parseInt(numero1) + parseInt(numero2))
    }
    const dividir = () => {
        Setresultado((parseInt(numero1) / parseInt(numero2)).toFixed(2))
    }
    const multiplicar = () => {
        Setresultado(parseInt(numero1) * parseInt(numero2))
    }
    const subtrair = () => {
        Setresultado(parseInt(numero1) - parseInt(numero2))
    }
    return(
        <View style = {estilos.container}>
            <Text style ={[estilos.header]}>Calculadora 0.1</Text>
            <TextInput style={[estilos.input,{marginBottom:10}]} placeholder="Digita seu primeiro nome" defaultValue={""} onChangeText={(numero)=> Setnumero1(numero)} keyboardType="numeric" />
            <TextInput style={estilos.input} placeholder="Digita seu primeiro nome" defaultValue={""} onChangeText={(numero)=> Setnumero2(numero)} keyboardType="numeric"/>
            <View style={estilos.operacoes}>
                <Button  title="Somar" onPress={ () => somar(numero1,numero2)}></Button>
                <Button title="Sub" onPress={() => subtrair(numero1,numero2)}></Button>
                <Button title="Multi" onPress={() => multiplicar(numero1,numero2)}></Button>
                <Button title="Divi" onPress={() => dividir(numero1,numero2)}></Button>
            </View>

            <Botao funcao={somar} titulo="somar"/>

            <Text style = {[estilos.header,{marginTop:20}]}>
                Resultado: {resultado}
            </Text>
        </View>
    )
}

export default Calculadora