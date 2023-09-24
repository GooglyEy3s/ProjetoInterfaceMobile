import {View,StyleSheet,Image} from "react-native"
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'


const MyFlexbox = () =>{
    return(
        <View style ={estilos.container}>
            <View style ={estilos.view1}></View>
            <View style ={estilos.view3}></View>
            <Image source={require('../../midia/gatou.jpg')} style ={estilos.view3} />
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
        
    },
    view1:{
        backgroundColor:"pink",
        borderRadius:25,
        height:100,
        width:100
    },
    view2:{
        backgroundColor:"yellow",
        flex:1
        
    },
    view3:{
        backgroundColor:"cyan",
        borderRadius:25,
        marginLeft:20,
        height:100,
        width:100
    }
})

export default MyFlexbox