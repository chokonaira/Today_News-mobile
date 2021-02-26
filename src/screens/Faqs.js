import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function Faqs({ navigation }) {
  return (
    <View style={styles.faqs}>
      <Button
        primary
        small
        title="Frequently asked questions"
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  faqs: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
});
