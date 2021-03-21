import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import Header from "../components/Header";
import store from "../redux/store";

export default function Profile({ navigation }) {
  const {
    auth: { user },
  } = store.getState();

  return (
    <View style={styles.profile}>
      <Header
        onPress={() => navigation.openDrawer()}
        name="menu"
        title="Profile"
        navigation={navigation}
      />
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Logged-In As</Text>
        <Text>{user.email}</Text>
        <Image style={styles.logo} source={require("../assets/avater.png")} />
      </View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const logoHeight = height * 0.28;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: logoHeight,
    height: logoHeight,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
});
