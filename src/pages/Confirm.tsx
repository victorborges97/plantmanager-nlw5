import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../styles/colors"

import { Button } from "../components/Button"

export default function Confirm() {
    const [nome, setNome] = useState("")

    const hasName = !nome

    return (
        <SafeAreaView style={styles.container}>
            <Text 
                style={styles.emoticon}
            >
                {
                    hasName ?
                    "😃"
                    :
                    "😄"
                }
            </Text>
            <Text 
                style={styles.text_titulo}
            >
                Como podemos {"\n"}
                chamar você? {"\n"}
            </Text>

            <TextInput
                style={styles.input}
                value={nome}
                placeholder="Digite um nome"
                onChangeText={setNome}
            />

            <Button 
                title="Confirmar" 
                onPress={() => { }}
                optionsBtn={{ width: "60%", marginTop: 25}} 
                optionsText={{ fontSize: 18 }}
                hasName={hasName}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "flex-start",
    },

    emoticon: {
        marginTop: "15%",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
    },

    text_titulo: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 25,
    },

    input: {
        fontSize: 18,
        width: "60%",
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        paddingVertical: 10,
        fontWeight: "bold",
        color: colors.body_dark,
        textAlign: "center",
        marginVertical: 25,
    },
});
