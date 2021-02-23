import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

export default function () {
  return (
    <Image
      style={styles.logo}
      source={require("../assets/news_logo.png")}
      resizeMode="stretch"
    />
  );
}
const { height } = Dimensions.get("screen");
const logoHeight = height * 0.28;

const styles = StyleSheet.create({
  logo: {
    width: logoHeight,
    height: logoHeight,
  },
});
