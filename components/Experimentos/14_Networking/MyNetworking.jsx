import { useEffect, useState } from "react"
import {View,Text,Image, FlatList} from "react-native"
import estilos from "./Estilos"

const MyNetworking = () => {
    const[filmes,SetFilmes] = useState('')
    const[pokemon,SetPokemon] = useState('')
    const [movies,SetMovies] = useState('')

    useEffect(
        ()=> {
            GetMovies()
            GetPokemon()
        }
        ,
        []
    )

    const GetMovies = () => {
        fetch('https://reactnative.dev/movies.json')
        .then(response => response.json())
        // .then( {} => SetFilmes(dados.movies[0].title))
        .catch(error => console.log(error))
    }
    const GetPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/lopunny')
        .then(response => response.json())
        .then( dados => SetPokemon(dados.sprites.front_shiny))
        .then( dados => console.log(dados.name))
        .catch(error => console.log(error))
    }

    return(
        <View style={estilos.container}>
            <Text style={estilos.header}>
                {filmes} aaaaaaaaaa
            </Text>
            <Image source={{uri:pokemon}} style={{width:200, height:200}} />
            <FlatList data = {fimes} renderItem = { 
                ({item}) => {
                    return (
                        <View> 
                            <Text> 
                                {item.title}
                            </Text> 
                        </View>  
                    )}} />
        </View>
    ) 
}

export default MyNetworking