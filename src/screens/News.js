import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { headerDate } from "../helpers/date";
import { useSelector } from "react-redux";
import { usePrevious } from "../components/usePrevious";
import {
  fetchAllFavorite,
  addFavorite,
  removeFavorite,
} from "../redux/actions/favorites";

export default function TodaysNews({ navigation }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const { news: articles, isLoading, isNewsFetched } = useSelector((state) => state.news);
  const [favoriteColor, setFavoriteColor] = React.useState("#bde0fe");
  
  React.useEffect(() => {
    dispatch(news(fetchAllFavorite));
    dispatch(fetchAllFavorite());
    
  },[]);
  
  const previousState = usePrevious(favorites)
  // formatter(favorites, articles).then(result =>{
  //   console.log(result)
  // })
  console.log(articles.articles)
  
  const favoriteHandler = (article) => {
    // dispatch(fetchAllFavorite())
    // formatter(article, favorites, setFavoriteColor)
    // console.log(formattedArticle)
    dispatch(addFavorite(article));
    // dispatch(removeFavorite(article));
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
                    color={favoriteColor}
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
