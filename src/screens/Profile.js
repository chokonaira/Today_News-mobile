import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";

export default function Profile({ navigation }) {
  return (
    <View style={styles.profile}>
      <Header
        onPress={() => navigation.openDrawer()}
        name="menu"
        title="Profile"
        navigation={navigation}
      />

      <Button
        primary
        small
        title="Log out"
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    alignSelf: "center",
  },
});
