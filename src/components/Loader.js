import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { StyleSheet } from "react-native";

export default function Loader({ visible }) {
  return (
    <Spinner
      animation="none"
      color="#fff"
      visible={visible}
      textStyle={{ color: "#fff" }}
      overlayColor="rgba(0, 0, 0, .8)"
      textStyle={{ color: "#fff" }}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    opacity: 0.5,
    backgroundColor: "red",
  },
});
