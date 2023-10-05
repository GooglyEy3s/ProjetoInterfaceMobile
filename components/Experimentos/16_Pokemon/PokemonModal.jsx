import { View, Text, Button,Pressable } from "react-native";
import { useState,useEffect } from "react";

const PokemonModal = ({navigation,route}) => {
    const {url} = route.params
    const [dados,setDados] = useState({})
    const fetchPokemon = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const pokemon = {
                name:data.name,
                height:data.height,
                order:data.order,
                weight:data.weight
            }
            setDados(pokemon)
        })
    }

    useEffect(
        () => {
            fetchPokemon()
        }
        ,
        []
    )

    return( 
        <View style = {{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>Isso é um modal tá bom ?</Text>
            <Text>{dados.name}</Text>
            <Pressable style = {{width:"80%", height:50, backgroundColor:"lightblue", justifyContent:"center", alignItems:"center"}}  onPress={() => navigation.goBack()}> 
                <Text >Tá bom brigado</Text> 
            </Pressable>
        </View>
    )
}

export default PokemonModal