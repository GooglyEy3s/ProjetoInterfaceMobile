import {View,Text,Button} from "react-native"
import { useState } from "react"

const State = () => {
    const [contato,SetContato] = useState (0)

    return (
        <View>
            <Text style = {{fontSize:25,fontWeight:"bold"}}>Contador: {contato}</Text>
            <Button title="Me aperta" onPress={() => {SetContato (prev => prev + 1)}} />
        </View>
    )
}

export default State