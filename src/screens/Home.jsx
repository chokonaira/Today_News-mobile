import { Text } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import Button from "../components/Button";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay Connect With Top News</Text>
        <Text style={styles.text}>Sign In with Account</Text>
        <View style={styles.buttonWrapper}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A6FB",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  buttonWrapper: {
    alignItems: "flex-end",
    marginTop: 30,
  },
});
