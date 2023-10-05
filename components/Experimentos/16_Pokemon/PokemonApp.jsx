import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PokedexScreen from "./PokedexScreen";
import PokemonModal from "./PokemonModal";

const Stack = createNativeStackNavigator()

const PokemonApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    {/* GRUPO DAS TELAS PRINCIPAIS */}
                    <Stack.Screen name="Pokedex" component={PokedexScreen} />
                </Stack.Group>

                <Stack.Group screenOptions={{ presentation: "modal" }}>
                    {/* GRUPO DOS MODAIS */}
                    <Stack.Screen name="PokemonModal" component={PokemonModal} />
                </Stack.Group>
            </Stack.Navigator>


        </NavigationContainer>
    )
}

export default PokemonApp