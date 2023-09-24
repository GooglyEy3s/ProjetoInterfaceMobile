import { View, Text, Button } from "react-native";
import MyStyle from "./Style";

const Tela03 = ({navigation}) => {
    return(
        <View style= {MyStyle.container}>
            <Text style= {MyStyle.header}>Essa é a tela 3 :c</Text>
            <Button 
                title="Voltar para tela inicial"
                onPress={() => navigation.popToTop("Tela03")}
            />
        </View>
    )
}

export default Tela03