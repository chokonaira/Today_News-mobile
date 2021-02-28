import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NewsCard from "../components/Card";
import Header from "../components/Header";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";

export default function TodaysNews({ navigation }) {
  // news();
  const dispatch = useDispatch()
  dispatch(news());
  return (
    <View style={styles.todayNews}>
      <Header
        onPress={() => navigation.openDrawer()}
        name="menu"
        title="Today News"
        navigation={navigation}
      />
      <NewsCard />
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
