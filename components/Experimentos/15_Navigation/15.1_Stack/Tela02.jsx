import { View, Text,Button } from "react-native";
import MyStyle from "./Style";

const Tela02 = ({navigation}) => {
    return(
        <View style= {MyStyle.container}>
            <Text style= {MyStyle.header}>Essa é a tela 2 :")"</Text>
            <Button 
                title="Ir para a tela 3"
                onPress={() => navigation.navigate("Tela03")}
            />
        </View>
    )
}

export default Tela02
