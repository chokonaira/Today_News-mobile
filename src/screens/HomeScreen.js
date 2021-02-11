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
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
  },
});
