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
import { encypt } from "../helpers/crypto";

export default function TodaysNews({ navigation }) {
  const dispatch = useDispatch();
  const { news: articles, isLoading, isNewsFetched } = useSelector((state) => state.news);
  const { favorites } = useSelector((state) => state.favorites);
  const [favoriteColor, setFavoriteColor] = React.useState("#bde0fe");
  const [formattedArticles, setFormattedArticles] = React.useState([]);
  const [isFetched, setisFetched] = React.useState(false);

  React.useEffect(() => {
    dispatch(news());
    dispatch(fetchAllFavorite());
    setFormattedArticles(articles.articles)
    setisFetched(true)
    // unknown()
    
      
  
  },[]);

  // console.log(formattedArticles)

   const unknown = ()=> {
     console.log('called')
     isFetched && articles.articles.map(article=> {
      if(favorites.length > 0){ 
        favorites.forEach(favorite => {
            encypt(article.url).then((value) => {
                const articleWithId = { ...article, articleId: value };
                if(articleWithId.articleId === favorite.articleId && favorite.favorited){
                  setFavoriteColor('red');
                  setFormattedArticles(...formattedArticles, {...articleWithId, favorited: true})
                } else {
                  setFavoriteColor('#bde0fe');
                  setFormattedArticles(...formattedArticles, {...articleWithId, favorited: false})
                }
            })
         })
      } else {
        encypt(article.url).then((value) => {
          let updatedArticle = article;
          if(!article.hasOwnProperty('articleId')){
            updatedArticle = {...article, articleId: value};
          } 
          setFormattedArticles(...formattedArticles, {...updatedArticle, favorited: false})
        });
      }
    })
  }



  const favoriteHandler = (article) => {
    // encypt('jjjj').then((result)=> console.log(result))
    // dispatch(fetchAllFavorite())
    dispatch(addFavorite(article));
    console.log('here')
    // dispatch(removeFavorite(article));
  };

const format = (article) => {
  let updatedArticle;
  encypt(article.url).then((value) => {
    updatedArticle = { ...article, articleId: value, favorited: false };
    if (favorites.length > 0) {
      favorites.forEach((favorite) => {
        if (
          updatedArticle.articlesId === favorite.articlesId &&
          favorite.favorited === true
        ) {
          updatedArticle = favorite;
          setFavoriteColor("red");
        }
      });
    }
  });
  return updatedArticle;
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
              // const formattedArticle = format(article)
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
                    onFavoritePress={() => addFavorite(article)}
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
