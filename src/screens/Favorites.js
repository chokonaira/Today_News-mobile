import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
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
  const { favorites, isLoading } = useSelector((state) => state.favorites);

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

  return (
    <View style={styles.favoriteNews}>
      <Header
        onPress={() => navigation.goBack()}
        name="arrow-back"
        title="Favorite News"
        navigation={navigation}
      />
      <View style={styles.container}>
        <Loader visible={isLoading} />
        <ScrollView>
          {!isLoading &&
            favorites.map((favorite, index) => {
              return (
                <View key={index}>
                  <Card
                    author={favorite.author}
                    sourceName={favorite.source.name}
                    imageUrl={favorite.urlToImage}
                    color={favorite.favorited ? "red" : "#bde0fe"}
                    title={favorite.title}
                    onCardPress={() => {
                      console.log("carded");
                    }}
                    onFavoritePress={() => favoriteHandler(favorite)}
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
  favoriteNews: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  text: {
    alignSelf: "center",
  },
});
