import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NewsCard from "../components/Card";
import Header from "../components/Header";

export default function TodaysNews({ navigation }) {
  return (
    <View style={styles.todayNews}>
      <Header
        onPress={() => navigation.openDrawer()}
        name="menu"
        title="Latest News"
        navigation={navigation}
      />
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
