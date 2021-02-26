import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, name, onPress }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        onPress={onPress}
        name={name}
        size={40}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: Platform.OS === "android" ? "12%" : "12%",
    backgroundColor: "#00A6FB",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    top: Platform.OS === "android" ? 35 : 47,
    left: 10,
    color: "#fff",
  },
});
