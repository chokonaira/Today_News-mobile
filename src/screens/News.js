import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { headerDate } from "../helpers/date";
import { useSelector } from "react-redux";
import { addFavorite } from "../redux/actions/favorite";

export default function TodaysNews({ navigation }) {
  const dispatch = useDispatch();
  const [hack] = React.useState(false);
  const [favorite, setFavorite] = React.useState("#bde0fe");
  const { news: articles, isLoading, isNewsFetched } = useSelector(
    (state) => state.news
  );
  React.useEffect(() => {
    dispatch(news());
  }, []);

  const favoriteHandler = (article) => {
    // console.log(article, "article");
    dispatch(addFavorite(article))

    // {
    //   favorite === "#bde0fe"
    //     ? setFavorite("#f94144")
    //     : setFavorite("#bde0fe");
    //   console.log("favorited");
    // }
  };

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
        {/* <Loader visible={!isNewsFetched && hack} /> */}
        <Loader visible={isLoading} />
        <ScrollView>
          {isNewsFetched &&
            articles.articles.map((article, index) => {
              return (
                <View key={index}>
                  <Card
                    author={article.author}
                    sourceName={article.source.name}
                    imageUrl={article.urlToImage}
                    color={favorite}
                    title={article.title}
                    onCardPress={() => {
                      console.log("carded");
                    }}
                    onFavoritePress={() => favoriteHandler(article)}
                    onCommentPress={() => {
                      console.log("commented");
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
