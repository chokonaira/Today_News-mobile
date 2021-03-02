import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { headerDate } from "../helpers/date";
import { useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/favorite";
import { v4 as uuidv4 } from "uuid";

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
    // dispatch(addFavorite(article))
    dispatch(removeFavorite(article))

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
              const uniqueId = uuidv4();
              const articleWithId = { 
                ...article, 
                articleId: uniqueId, 
              };
              return (
                <View key={index}>
                  <Card
                    author={articleWithId.author}
                    sourceName={articleWithId.source.name}
                    imageUrl={articleWithId.urlToImage}
                    color={favorite}
                    title={articleWithId.title}
                    onCardPress={() => {
                      console.log("carded");
                    }}
                    onFavoritePress={() => favoriteHandler(articleWithId)}
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
