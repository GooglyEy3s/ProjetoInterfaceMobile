import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Questao01 from "./Questao01";
import Questao02 from "./Questão02";

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    {/* GRUPO DAS TELAS PRINCIPAIS */}
                    <Stack.Screen options={{ headerShown: false }} name="home" component={Questao01} />
                </Stack.Group>

                <Stack.Group screenOptions={{ presentation: "modal" }}>
                    {/* GRUPO DOS MODAIS */}
                    <Stack.Screen options={{ headerShown: false }} name="descricao" component={Questao02} />
                </Stack.Group>
            </Stack.Navigator>


        </NavigationContainer>
    )
}

export default Main