import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NewsCard from "../components/NewsCard";

export default function FavoriteNews() {
  return (
    <View style={styles.favoriteNews}>
      <NewsCard />
      <Text style={styles.text}>Favorite News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteNews: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  text: {
    alignSelf: "center",
  },
});
