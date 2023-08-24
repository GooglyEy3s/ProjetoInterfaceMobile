import { View, Text } from "react-native"
import ChildA from "./05Child"
import ChildB from "./05ChildB"

const Parent = () => {
    return(
        <View>
            <ChildA />
            <ChildB eita="Se vc escrever aqui morre" />
            <Text style = {{fontSize:25, fontWeight:"bold"}}>Eita como escreve escrevido</Text>
        </View>
    )
}

export default Parent