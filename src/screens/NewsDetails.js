import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
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
  const defaultImage =
    "https://lh3.googleusercontent.com/proxy/YKSgQxCMHJraD0dW8afdPheVXfZEWyGoIVcF0zrMhYdx9WFqeZGm4fU9FHg8MaLRken_eHKaD7mnJ7j6f5Lfom6vShg";

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
            imageUrl={params.article.urlToImage || defaultImage}
            color={params.article.favorited ? "red" : "#bde0fe"}
            content={params.article.content}
            onFavoritePress={() => favoriteHandler(params.article)}
            onCommentPress={() => {
              console.log("commented");
            }}
          />
          <Card>
            <Card>
              <View style={styles.action}>
                <TextInput
                  testID="comments"
                  placeholder="Write comments here..."
                  type="comments"
                  onChangeText={(comment) => setComment(comment)}
                  value={comment}
                  style={styles.textInput}
                  multiline={true}
                  numberOfLines={2}
                />
                <View style={styles.buttonWrapper}>
                  <Button
                    title="Submit"
                    onPress={commentHandler}
                    color="#fff"
                    fontSize={11}
                    size={10}
                    style={[
                      styles.button,
                      { justifyContent: "center", alignItems: "center" },
                    ]}
                  />
                </View>
              </View>
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
  textInput: {
    fontSize: 13,
    padding: 10,
    color: "#333",
    height: 50,
    width: "100%",
  },
  buttonWrapper: {
    backgroundColor: "#00A6FB",
    width: 60,
    height: 23,
    paddingTop: 7,
    marginLeft: 7,
    marginTop: 7,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    fontSize: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    flexDirection: "column",
  },
  commentHeader: { color: "#00A6FB", fontWeight: "bold" },
  commentText: { color: "#00A6FB", padding: 8 },
});
