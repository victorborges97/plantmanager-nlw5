import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from "../styles/colors"
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        style={styles.botao}
        {...rest}
    >
        <Text
            style={styles.text_botao}
        >
            { title }
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
      backgroundColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      height: 56,
  },
  text_botao: {
      color: colors.white,
      fontSize: 16,
      fontFamily: fonts.heading,
  },
});
