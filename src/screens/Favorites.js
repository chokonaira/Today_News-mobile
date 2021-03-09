import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/favorites";
import { useFocusEffect } from "@react-navigation/native";

export default function FavoriteNews({ navigation }) {
  const dispatch = useDispatch();
  const { isNewsFetched } = useSelector((state) => state.news);
  const { favorites } = useSelector((state) => state.favorites);
  const defaultImage = 'https://lh3.googleusercontent.com/proxy/YKSgQxCMHJraD0dW8afdPheVXfZEWyGoIVcF0zrMhYdx9WFqeZGm4fU9FHg8MaLRken_eHKaD7mnJ7j6f5Lfom6vShg'

  useFocusEffect(
    React.useCallback(() => {
      dispatch(news());
    }, [favorites.length])
  );

  const favoriteHandler = (article) => {
    if (article.favorited) {
      dispatch(removeFavorite(article));
    }
    dispatch(addFavorite(article));
  };

  if (favorites.length === 0) {
    return (
      <View style={styles.favoriteNews}>
        <Header
          onPress={() => navigation.goBack()}
          name="arrow-back"
          title="Favorite News"
          navigation={navigation}
        />
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Loader visible={!isNewsFetched} />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            You have no Favorites news
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.favoriteNews}>
      <Header
        onPress={() => navigation.goBack()}
        name="arrow-back"
        title="Favorite News"
        navigation={navigation}
      />
      <View style={styles.container}>
        <Loader visible={!isNewsFetched} />
        <ScrollView>
          {isNewsFetched &&
            favorites.map((article, index) => {
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
  favoriteNews: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  text: {
    alignSelf: "center",
  },
});
