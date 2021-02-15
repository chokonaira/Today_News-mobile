import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, ...rest }) => (
  <TouchableOpacity {...rest} onPress={onPress} style={styles.button}>
    <Text style={styles.textSign}>{title}</Text>
  </TouchableOpacity>
);
export default Button;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: '#00A6FB'
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold",
  }
});
