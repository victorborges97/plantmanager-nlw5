import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/core';

import colors from "../styles/colors"
import fonts from '../styles/fonts';

import { Button } from "../components/Button"

export default function UserIdentification() {
    const { navigate } = useNavigation()

    const [nome, setNome] = useState<string>("")
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const handleInputBlur = () => {
        setIsFocused(false)
    }
    const handleInputFocus = () => {
        setIsFocused(true)
    }
    const handleInputChange = (value: string) => {
        setIsFilled(!!value)
        setNome(value)
    }

   

    const handleUser = () => {
        if(isFilled) {
            navigate("Confirmation")

        }else {
            alert("Digite seu nome")
        }
        
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.wrapper}>
                        <Text 
                            style={styles.emoticon}
                        >
                            {
                                isFilled ?
                                "😄"
                                :
                                "😃"
                            }
                        </Text>
                        <Text 
                            style={styles.text_titulo}
                        >
                            Como podemos {"\n"}
                            chamar você? {"\n"}
                        </Text>

                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderBottomColor: colors.green }
                            ]}
                            value={nome}
                            placeholder="Digite um nome"
                            onChangeText={handleInputChange}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                        />

                        <View style={styles.footer}>
                            <Button 
                                title="Confirmar" 
                                onPress={handleUser}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },

    emoticon: {
        marginTop: 50,
        fontSize: 44,
        textAlign: "center",
        color: colors.heading,
    },

    text_titulo: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 20,
        fontFamily: fonts.heading,
    },

    input: {
        fontSize: 18,
        width: "60%",
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        paddingVertical: 10,
        color: colors.heading,
        textAlign: "center",
        marginTop: 20,
        fontFamily: fonts.text,
    },

    footer: {
        marginTop: 40,
        width: "60%"
    },
});
