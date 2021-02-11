import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NewsCard from "../components/NewsCard";

const DashboardScreen = () => {
  return (
    <View style={styles.dashboard}>
      <NewsCard />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: "orange",
  },
});
