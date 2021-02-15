import React from "react";
import { TouchableOpacity, Text, StyleSheet,  } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Button = ({ title, onPress, style, color, ...rest }) => (
  <TouchableOpacity {...rest} onPress={onPress} style={style}>
    <Text style={[styles.textSign, {color}]}>{title}</Text>
    <MaterialIcons {...rest}/>
  </TouchableOpacity>
);
export default Button;

const styles = StyleSheet.create({
  textSign: {
    color: "#fff",
    fontWeight: "bold",
  }
});
