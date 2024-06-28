import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

interface ButtonProps {
  text: string;
  handleOnPress: () => void;
}

const Button = ({ text, handleOnPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.primary,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
      }}
      onPress={handleOnPress}
    >
      <Text style={{ fontSize: 24, fontWeight: "500", color: "white" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
