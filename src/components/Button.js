import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Button({ title, onPress, style, color, fontSize, ...rest }) {
  return (
    <TouchableOpacity {...rest} onPress={onPress} style={style}>
      <Text style={[styles.textSign, { color, fontSize }]}>{title}</Text>
      <MaterialIcons {...rest}/>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textSign: {
    color: "#fff",
    fontWeight: "bold",
  },
});
