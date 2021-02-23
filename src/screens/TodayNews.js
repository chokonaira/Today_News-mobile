import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NewsCard from "../components/NewsCard";

export default function TodaysNews() {
  return (
    <View style={styles.todayNews}>
      <NewsCard />
      <Text style={styles.text}>Today News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todayNews: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  text: {
    alignSelf: "center",
  },
});
