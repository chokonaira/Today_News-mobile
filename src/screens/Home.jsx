import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

const Home = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Button
        primary
        small
        title="Go to SignUp Screen"
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#00A6FB",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: '#fff',
    padding: 10
  }
});
