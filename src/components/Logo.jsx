import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

const Logo = ({ title, onPress, ...rest }) => (
  <Image
    style={styles.logo}
    source={require("../assets/news_logo.png")}
    resizeMode="stretch"
  />
);
export default Logo;

const { height } = Dimensions.get("screen");
const logo_height = height * 0.28;

const styles = StyleSheet.create({
  logo: {
    width: logo_height,
    height: logo_height,
  },
});
