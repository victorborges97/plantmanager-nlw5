import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core"

import wateringImg from "../assets/watering.png";

import colors from "../styles/colors"
import fonts from '../styles/fonts';

export default function Welcome() {

    const { navigate } = useNavigation()

    const handleStart = () => {
        navigate("UserIdentification")
    }

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <Text 
                style={styles.text_titulo}
            >
                Gerencie {"\n"}
                suas plantas de {"\n"}
                forma fácil
            </Text>

            <Image
                style={styles.image}
                resizeMode="contain" 
                source={wateringImg} 
            />

            <Text
                style={styles.text_subtitle}
            >
                Não esqueça mais de regar suas {"\n"}
                plantas. Nós cuidamos de lembrar você {"\n"}
                sempre que precisar.
            </Text>

            <TouchableOpacity
                style={styles.botao}
                activeOpacity={0.8}
                onPress={handleStart}
            >
                <Text
                    style={styles.text_botao}
                >
                ➥
                </Text>
            </TouchableOpacity>
        </View>
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
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  text_titulo: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 34,
  },
  image: {
      height: Dimensions.get('window').width * 0.7,
  },
  text_subtitle: {
      textAlign: "center",
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading,
      fontFamily: fonts.text,
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
