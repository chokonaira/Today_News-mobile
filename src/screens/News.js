import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/favorites";

export default function TodaysNews({ navigation }) {
  const dispatch = useDispatch();
  const { favorites, isLoading } = useSelector((state) => state.favorites);
  const { news: articles, isNewsFetched } = useSelector((state) => state.news);
  const defaultImage =
    "https://lh3.googleusercontent.com/proxy/YKSgQxCMHJraD0dW8afdPheVXfZEWyGoIVcF0zrMhYdx9WFqeZGm4fU9FHg8MaLRken_eHKaD7mnJ7j6f5Lfom6vShg";

  React.useEffect(() => {
    dispatch(news());
  }, [favorites.length]);

  const favoriteHandler = (article) => {
    if (article.favorited) {
      dispatch(removeFavorite(article));
    }
    dispatch(addFavorite(article));
  };

  if (!isNewsFetched) {
    return <Loader visible={isLoading} />;
  }
  
  return (
    <View style={styles.todayNews}>
      <Header
        onPress={() => navigation.openDrawer()}
        name="menu"
        title="Today News"
        navigation={navigation}
      />
      <View style={styles.container}>
        <ScrollView>
          {isNewsFetched &&
            articles.articles.map((article, index) => {
              return (
                <View key={index}>
                  <Card
                    author={article.author}
                    sourceName={article.source.name}
                    imageUrl={article.urlToImage || defaultImage}
                    color={article.favorited ? "red" : "#bde0fe"}
                    title={article.title}
                    onCardPress={() =>
                      navigation.navigate("Details", { article })
                    }
                    onFavoritePress={() => favoriteHandler(article)}
                    onCommentPress={() =>
                      navigation.navigate("Details", { article })
                    }
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
