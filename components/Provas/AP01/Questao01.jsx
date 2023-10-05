import { View, Text, Button, Pressable, Image, FlatList, SectionList } from "react-native";
import { useState, useEffect } from "react";
import Styles from "./Styles";
import Data from "./Data";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import { ScrollView } from "react-native";


const Questao01 = ({ navigation }) => {
    return (
        <ScrollView style={Styles.container}>

            <View style={Styles.container}>
                <SectionList
                    style={Styles.list}
                    sections={Data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={Styles.itens} >
                            <View style={Styles.itens2}>
                                <IconButton
                                    
                                    containerColor="#2E2E2F"
                                    icon={item.icon}
                                    iconColor={"white"}
                                    size={30}
                                    onPress={() => navigation.navigate("descricao", { item })}
                                    mode="contained"
                                />
                                <View>
                                    <Text style={Styles.itemTitle}>{item.nome}</Text>
                                    <Text style={Styles.text}>{item.horario}</Text>
                                </View>
                            </View>

                            <Text style={Styles.itemTitle}>{item.valor}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={Styles.listTitle}>{title}</Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}

export default Questao01