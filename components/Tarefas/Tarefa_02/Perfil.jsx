import { View, Text, TextInput, Button, Pressable, Image } from "react-native";
import MyStyle from "./Styles";

const Perfil = ({navigation,route}) => {
    return (
        <View style={MyStyle.container}>
            <View style={MyStyle.perfil}>
                <Image style={MyStyle.perfilImage} source={require('../../midia/gatou.jpg')}></Image>
                <View style={{justifyContent:"space-between"}}>
                    <Text style={MyStyle.title}>Nome: {route.params?.Nome}</Text>
                    <Text style={MyStyle.title}>Idade: {route.params?.Idade}</Text>
                    <Text style={MyStyle.title}>Curso: <Text style={MyStyle.respon}>{route.params?.Curso}</Text></Text>
                </View>

            </View>

            <Pressable style={MyStyle.button} onPress={() => navigation.navigate("Home")}>
                <Text style={MyStyle.buttonText}>HOME</Text>
            </Pressable>
        </View>
    )
}

export default Perfil