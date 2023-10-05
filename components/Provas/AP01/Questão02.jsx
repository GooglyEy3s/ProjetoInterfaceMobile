import { View, Text, Button, Pressable, Image, FlatList, SectionList } from "react-native";
import { useState, useEffect } from "react";
import Styles from "./Styles";
import Data from "./Data";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"


const Questao02 = ({ navigation,route }) => {
    const {item} = route.params
    const {title} = route.params

    return (
        <View style={Styles.container2}>
            <IconButton
                containerColor="#2E2E2F"
                style={Styles.image}
                icon={item.icon}
                iconColor={"white"}
                size={30}
                onPress={() => navigation.navigate("descricao", { item })}
                mode="contained"
            />
            <View style={Styles.info}>
                <Text  style={Styles.title2}>{item.nome}</Text>
                <Text  style={Styles.title2}>{item.valor}</Text>
            </View>
            <Text  style={Styles.title3}>{item.title}</Text>
            <Text  style={Styles.text}>{item.horario}</Text>
        </View>
    )
}

export default Questao02