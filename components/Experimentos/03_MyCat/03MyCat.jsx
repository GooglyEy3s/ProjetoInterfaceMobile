import {View, Text, Image} from "react-native"

const MyCat = () => {

    nomeGatinho = "Thiago"
    const getFullName = (primeiroNome,SegundoNome) =>{
        return primeiroNome + " " + SegundoNome
    }

    return(
        <View>
            <Image source={{uri:"https://www.marthastewart.com/thmb/g-FunKfdiZombJQ7pB4wb8BF4C8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg"}} style={{width:200, height:200}} />
            <Text>O nome desse gatinho é {getFullName("Thiago","ferreira")}</Text>
        </View>
    )
}

export default MyCat
