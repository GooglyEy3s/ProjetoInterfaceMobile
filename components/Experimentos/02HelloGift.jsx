import { View,Text, ScrollView, Image, TextInput } from "react-native";

const HelloGift = () => {
    return(
        <View>
            <Text>Lindo muito lindo vc eita </Text>
            <Image source={{uri:"https://www.marthastewart.com/thmb/g-FunKfdiZombJQ7pB4wb8BF4C8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg"}} style={{width:200, height:200}} />
            <TextInput style={{height:50,borderColor:"black",borderWidth:2, fontSize:22}}>

            </TextInput>

            <Text>Amo oc</Text>
        </View>
    )
}

export default HelloGift