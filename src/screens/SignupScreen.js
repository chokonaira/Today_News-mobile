import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.signup}>
      <Button
        primary
        small
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
