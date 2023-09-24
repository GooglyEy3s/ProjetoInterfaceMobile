import {View,Image} from "react-native"
import {Gato} from "../midia/gatou.jpg"

const ChildA = () => {
    return(   
        <View>
            <Image source={Gato} style={{width:200, height:200}} />  
        
        </View>
    )
}

export default ChildA