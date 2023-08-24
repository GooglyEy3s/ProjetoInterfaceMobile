import {View,Image, TextInput} from "react-native"

const ChildB = ({eita}) => {
    return(   
        <View>
            <TextInput style={{height:40,borderColor:"black",borderWidth:2}} placeholder={eita} />

           
        </View>
    )
}

export default ChildB