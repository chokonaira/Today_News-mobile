import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.signup}>
      <Button
        primary
        small
        style={styles.button}
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  }
});
