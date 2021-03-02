import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";

export default function FavoriteNews({ navigation }) {
  return (
    <View style={styles.favoriteNews}>
      <Header
        onPress={() => navigation.goBack()}
        name="arrow-back"
        title="Favorite News"
        navigation={navigation}
      />
      <Card />
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
