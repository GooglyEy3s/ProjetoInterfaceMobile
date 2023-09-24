import { View, Text, Button } from "react-native";
import MyStyle from "./Styles";

const Home = ({navigation}) => {
    return (
        <View style = {MyStyle.container}>
            <Button title="Cadastro" onPress={() => navigation.navigate("Cadastro")} />
            <Button title="IMC" onPress={() => navigation.navigate("IMC")}/>
            <Button title="Sobre" onPress={() => navigation.navigate("Sobre")}/>
        </View>
    )
}

export default Home