import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela01 from "./Tela01";
import Tela02 from "./Tela02";
import Tela03 from "./Tela03";

const Stack = createNativeStackNavigator()

const MainPage = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Tela01" component={Tela01} />
                <Stack.Screen name = "Tela02" component={Tela02} />
                <Stack.Screen name = "Tela03" component={Tela03} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainPage