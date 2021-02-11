import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.dashboard}>
      <Button
        primary
        small
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
