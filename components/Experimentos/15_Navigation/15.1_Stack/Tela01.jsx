import { View, Text, Button } from "react-native";
import MyStyle from "./Style";

const Tela01 = ({navigation}) => {
    return(
        <View style= {MyStyle.container}>
            <Text style= {MyStyle.header}>Essa é a tela 1 :o</Text>
            <Button 
                title="Ir para a tela 2"
                onPress={() => navigation.navigate("Tela02")}
            />
        </View>
    )
}

export default Tela01