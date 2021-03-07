import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { news } from "../redux/actions/news";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/favorites";
import Button from "../components/Button";
import Input from "../components/Input";
import { Card, CardItem } from "native-base";

export default function NewsDetails({ navigation, route: { params } }) {
  const dispatch = useDispatch();
  const [comment, setComment] = React.useState("");
  const { favorites, isLoading } = useSelector((state) => state.favorites);

  React.useEffect(() => {
    dispatch(news());
  }, [favorites.length]);

  const commentHandler = () => {};

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
        title={params.article.source.name}
      />

      <View style={styles.container}>
        <ScrollView>
          <DetailsCard
            imageUrl={params.article.urlToImage}
            color={params.article.favorited ? "red" : "#bde0fe"}
            content={params.article.content}
            onFavoritePress={() => favoriteHandler(params.article)}
            onCommentPress={() => {
              console.log("commented");
            }}
          />
          <Card>
            {/* <Card>
              <CardItem style={styles.commentWrapper} cardBody>
                <Text style={styles.commentHeader}>Comments</Text>
              </CardItem>
            </Card> */}
            <Card>
              <CardItem >
                <Input
                  testID="comments"
                  placeholder="Write comments here..."
                  type="comments"
                  onChangeText={(comment) => setComment(comment)}
                  value={comment}
                  style={styles.textInput}
                />
                <View style={styles.buttonWrapper}>
                  <Button
                    title="Add comment"
                    onPress={commentHandler}
                    color="#333"
                    size={20}
                    style={[
                      styles.button,
                      { width: "100%", backgroundColor: "#00A6FB" },
                    ]}
                  />
                </View>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <View>
                  <Text style={styles.commentText}>
                    {params.article.content}
                  </Text>
                </View>
              </CardItem>
            </Card>
          </Card>
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
  commentWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 35,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    marginTop: Platform.OS === "ios" ? 0 : -8,
    paddingLeft: 7,
    color: "#333",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 10,
    color: "red",
    width: "50%",
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  commentHeader: { color: "#00A6FB", fontWeight: "bold" },
  commentText: { color: "#00A6FB", padding: 8 },
});
