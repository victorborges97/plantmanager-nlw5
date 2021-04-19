import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import wateringImg from "../assets/watering.png";

import colors from "../../styles/colors"

import { Button } from "../components/Button"

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
        <Text 
            style={styles.text_titulo}
        >
            Gerencie {"\n"}
            suas plantas {"\n"}
            de forma fácil
        </Text>

        <Image
            style={styles.image} 
            source={wateringImg} 
        />

        <Text
            style={styles.text_subtitle}
        >
            Não esqueça mais de regar suas plantas.{"\n"}
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button 
            title="➥" 
            onPress={() => { }} 
            optionsBtn={{ width: 56 }}
        />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text_titulo: {
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.heading,
  },
  image: {
      width: 292,
      height: 294,
  },
  text_subtitle: {
      textAlign: "center",
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading,
  },
  botao: {
      backgroundColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      height: 56,
      width: 56,
  },
  text_botao: {
      color: colors.white,
      fontSize: 24,
  },
});
