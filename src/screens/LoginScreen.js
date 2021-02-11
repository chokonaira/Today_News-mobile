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
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
