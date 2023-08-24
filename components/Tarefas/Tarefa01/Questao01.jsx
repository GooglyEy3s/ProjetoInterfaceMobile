import {View, Text, Image, Button} from "react-native"
import { useState } from "react"

const Questao01 = () =>{
    const [link,SetLink] = useState (false)
    const [image,SetImage] = useState ("https://www.marthastewart.com/thmb/g-FunKfdiZombJQ7pB4wb8BF4C8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg")


    const mudar = () => {
        if(link == false){
            SetLink(true)
            SetImage("https://images-prod.dazeddigital.com/778/azure/dazed-prod/1330/4/1334197.jpg")
        }
        else{
            SetLink(false)
            SetImage("https://www.marthastewart.com/thmb/g-FunKfdiZombJQ7pB4wb8BF4C8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg")
        }
    }
    return(
        <View>
            <Image source={{uri: image}} style={{width:200, height:200}} />
            <Text style = {{fontSize:20,fontWeight:"bold"}}>
                Nome completo: Jefferson Claudio Dantas Uchoa 
            </Text>
            <Text style = {{fontSize:20}}>
                Cidade de origem: São Paulo
            </Text>
            <Text style = {{fontSize:20,color:"red"}}>
                Curso e Semestre: DD 6 semestre
            </Text>
            <Button title="Transformação" onPress={() => mudar()} />
        </View>
    )
}

export default Questao01