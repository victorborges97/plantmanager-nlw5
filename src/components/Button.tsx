import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from "../../styles/colors"

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    widthB?: number;
    optionsBtn?: object;
    optionsText?: object;
    hasName?: boolean;
}

export function Button({ title, widthB, optionsBtn, optionsText, hasName, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
        activeOpacity={hasName ? 0.2 : 0.8}
        style={[styles.botao, optionsBtn]}
        {...rest}
        disabled={hasName}
    >
        <Text
            style={[styles.text_botao, optionsText]}
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
      marginBottom: 10,
      height: 56,
  },
  text_botao: {
      color: colors.white,
      fontSize: 24,
  },
});
