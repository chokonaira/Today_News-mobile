import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { date } from "../helpers/date";
import { useSelector } from "react-redux";
import { usePrevious } from "../components/usePrevious";
import {
  fetchAllFavorite,
  addFavorite,
  removeFavorite,
} from "../redux/actions/favorites";
import { useFocusEffect } from '@react-navigation/native';


export default function FavoriteNews({ navigation }) {
  const dispatch = useDispatch();
  const { favorites, isLoading } = useSelector((state) => state.favorites);
  const [iconColor, setIconColor] = React.useState("#bde0fe");

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchAllFavorite());
    }, [])
  );

  const previousState = usePrevious(favorites)

  const favoriteHandler = (favorite) => {
    // if ()
    // dispatch(addFavorite(favorite));
    dispatch(removeFavorite(favorite));
  };

  return (
    <View style={styles.favoriteNews}>
      <Header
        date={date.headerDate()}
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
                    color={favorite.favorited ? 'red' : iconColor}
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
  todayNews: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  text: {
    alignSelf: "center",
  },
});
