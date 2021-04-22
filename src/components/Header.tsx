import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import colors from "../styles/colors"
import fonts from '../styles/fonts';

interface HeaderProps {
    
}

export function Header({ ...rest } : HeaderProps) {
  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.greeting}>
                Olá,
            </Text>
            <Text style={styles.username}>
                João
            </Text>
        </View>


        <Image 
            style={styles.avatar}
            source={{ uri: "https://avatars.githubusercontent.com/u/47835782?v=4" }} />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    username: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
});
