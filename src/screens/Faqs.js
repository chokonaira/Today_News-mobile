import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";

export default function Faqs({ navigation }) {
  return (
    <View style={styles.faqs}>
      <Header
        onPress={() => navigation.openDrawer()}
        name="menu"
        title="FAQs"
        navigation={navigation}
      />
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
  },
  button: {
    alignSelf: "center",
  },
});
