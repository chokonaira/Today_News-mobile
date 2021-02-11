import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

const DashboardScreen = () => {
  return (
    <View style={styles.dashboard}>
      <Card />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
});
