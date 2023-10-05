import { View, Text, Button, Pressable, Image, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";

const corPokemon = (tipo) => {
    if (tipo === "normal") {
        return "#A8A77A"; // Bege/marrom
    } else if (tipo === "fighting") {
        return "#C22E28"; // Vermelho
    } else if (tipo === "flying") {
        return "#A98FF3"; // Azul violeta
    } else if (tipo === "poison") {
        return "#A33EA1"; // Roxo
    } else if (tipo === "ground") {
        return "#E2BF65"; // Amarelo
    } else if (tipo === "rock") {
        return "#B6A136"; // Marrom claro
    } else if (tipo === "bug") {
        return "#A6B91A"; // Verde amarelado
    } else if (tipo === "ghost") {
        return "#735797"; // Roxo escuro
    } else if (tipo === "steel") {
        return "#B7B7CE"; // Cinza azulado
    } else if (tipo === "fire") {
        return "#EE8130"; // Laranja
    } else if (tipo === "water") {
        return "#6390F0"; // Azul
    } else if (tipo === "grass") {
        return "#7AC74C"; // Verde claro
    } else if (tipo === "electric") {
        return "#F7D02C"; // Amarelo claro
    } else if (tipo === "psychic") {
        return "#F95587"; // Rosa
    } else if (tipo === "ice") {
        return "#96D9D6"; // Azul esverdeado
    } else {
        // Tipo desconhecido, retorna uma cor padrão ou uma mensagem de erro
        return "#FFFFFF"; // Branco (cor padrão)
    }
};

const PokedexScreen = ({ navigation }) => {

    const [pokemon, setPokemon] = useState([])
    let colors = []

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=6&offset=0")
            .then(response => response.json())
            .then((json) => {
                const vetorFormatado = json.results.map(
                    ({ name, url }) => {
                        return { id: url.split("/")[6], name, url }
                    }
                )
                setPokemon(vetorFormatado)
                console.log(vetorFormatado[0].url)
            })
            .catch(error => console.log(error))
    }

    useEffect(
        () => {
            fetchPokemon()
        }
        ,
        []
    )

    const renderPokemon = () => {

        const [pokemonTipo, setPokemonTipo] = useState('')

        

        return (
            <ScrollView style={{ width: "100%", padding: 10 }}>
                <View>
                    {
                        pokemon.map(
                            (pokemonObj) => {


                                const fetchPokemon = (url) => {
                                    let tipo = ""
                                    fetch(url)
                                        .then((response) => response.json())
                                        .then((data) => {
                                            setPokemonTipo (data.types[0].type.name)
                                             tipo = data.types[0].type.name
                                        })
                                        .catch((error) => {
                                            console.error("Erro ao buscar dados do Pokémon:", error);
                                        });
                                    
                                    return corPokemon(tipo)
                                }

                                return (

                                    <Pressable style={{ flexDirection: "row", padding: 20, backgroundColor: fetchPokemon(pokemonObj.url) , borderRadius: 10, margin: 8, alignItems: "center" }} onPress={() => navigation.navigate("PokemonModal", { url: pokemonObj.url })}>
                                        <Image
                                            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png` }}
                                            style={{ width: 70, height: 70 }}
                                        />
                                        <Text style={{ fontSize: 20 }}>
                                            {pokemonObj.name}
                                        </Text>
                                    </Pressable>

                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Pokedex Screen</Text>
            {/* <Image source={{uri:"https://static.pokemonpets.com/images/monsters-images-300-300/10428-Shiny-Mega-Lopunny.webp"}} style={{width:200, height:200}} /> */}

            {renderPokemon()}
        </View>
    )
}

export default PokedexScreen