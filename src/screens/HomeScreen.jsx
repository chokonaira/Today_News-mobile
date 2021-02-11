import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Button
        primary
        small
        title="Sign Up"
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#00A6FB",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  }
});
