import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { headerDate } from "../helpers/date";
import { useSelector } from "react-redux";
import {
  fetchAllFavorite,
  addFavorite,
  removeFavorite,
} from "../redux/actions/favorites";
import * as Crypto from 'expo-crypto';
import { encypt } from "../helpers/crypto";

export default function TodaysNews({ navigation }) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = React.useState("#bde0fe");
  const { news: articles, isLoading, isNewsFetched } = useSelector(
    (state) => state.news
  );
  React.useEffect(() => {
    dispatch(news());
   
  }, []);

  const favoriteHandler = async(article) => {
    encypt('jjjj').then((result)=> console.log(result))
    // console.log(encypt('jjjj'))

    // dispatch(fetchAllFavorite())
    dispatch(addFavorite(article));
    // dispatch(removeFavorite(article));
  };

  // const appendArticleId = (article) => {
  //   console.log(article.hasOwnProperty("articleId"))
  //   console.log(article, 'article')
  //   if (article.hasOwnProperty("articleId")) return article;
  //   const uniqueId = uuidv4();
  //   const newArticle = {
  //     ...article,
  //     articleId: uniqueId,
  //   };
  //   return newArticle;
  // };

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
              // encriptedUrl = await encypt(article.url);
              // const articleWithencription = {
              //   ...article,
              //   articleId: encriptedUrl
              // }
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
