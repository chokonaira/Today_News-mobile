import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <Button
        primary
        small
        title="Dashboard"
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  }
});
