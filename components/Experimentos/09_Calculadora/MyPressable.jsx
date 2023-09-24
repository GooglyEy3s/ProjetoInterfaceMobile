import { View, Text, TextInput, Button, Pressable} from "react-native";

const Botao = ({funcao,titulo}) => {
    return (
        <View>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "black" : "purple", padding: 5, marginTop: 20, borderRadius: 20, width: 200, height: 50, justifyContent: "center", alignItems: "center" }]} onPress={funcao}>

                <Text style={{ color: "white", fontWeight: "bold" }}>{titulo}</Text>
            </Pressable>
        </View>
    )
}

export default Botao
