import {View, Text, Image} from "react-native"

const Questao03 = ({cor1,cor2,cor3,cor4}) =>{
    return(
        <View>
            <Text style = {{fontSize:20,color:cor1}}>
                Edição de Imagem
            </Text>
            <Text style = {{fontSize:20,color:cor2}}>
                LMS
            </Text>
            <Text style = {{fontSize:20,color:cor3}}>
                Projeto Integrado
            </Text>
            <Text style = {{fontSize:20,color:cor4}}>
                PIW
            </Text>
        </View>
    )
}

export default Questao03