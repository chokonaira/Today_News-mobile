import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { headerDate } from "../helpers/date";
import { useSelector } from "react-redux";

export default function TodaysNews({ navigation }) {
  const dispatch = useDispatch();
  const { news: articles, loading, isNewsFetched } = useSelector(
    (state) => state.news
  );
  React.useEffect(() => {
    dispatch(news());
  }, []);

  return (
    <View style={styles.todayNews}>
      <Header
        date={headerDate()}
        onPress={() => navigation.openDrawer()}
        name="menu"
        title="Today News"
        navigation={navigation}
      />
      <View style={styles.container}>
        <Loader visible={loading} />
        <ScrollView>
          {isNewsFetched &&
            articles.articles.map((article, index) => {
              return (
                <View key={index}>
                  <Card
                    author={article.author}
                    sourceName={article.source.name}
                    imageUrl={article.urlToImage}
                    color={"red"}
                    title={article.title}
                    onPress={() => {
                      console.log("pressed");
                    }}
                  />
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },
  todayNews: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  text: {
    alignSelf: "center",
  },
});
