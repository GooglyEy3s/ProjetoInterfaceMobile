import { View, Text, TextInput, Button, Pressable} from "react-native";
import MyStyle from "./Styles";

const Sobre = ({navigation}) => {
    return(
        <View style = {MyStyle.container}>
            <Text style={{fontWeight: "bold", fontSize: 50, color: "dodgerblue"}}>
                Sobre
            </Text>
            <Text style = {MyStyle.text}>
                BlablablablablablablablablablablablablablablablablablablablablablablablablablablablaBlablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabl
            </Text>
            <Pressable style = {MyStyle.button} onPress={() => navigation.navigate("Home")}> 
                <Text style = {MyStyle.buttonText}>HOME</Text> 
            </Pressable>
        </View>
    )
}

export default Sobre