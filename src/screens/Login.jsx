import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <Button
        primary
        small
        title="See to Today News"
        style={styles.button}
        // onPress={() => navigation.navigate("Today News")}
      />
    </View>
  );
};

export default Login;

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
