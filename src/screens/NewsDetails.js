import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addComment, fetchAllComments } from "../redux/actions/comments";
import Button from "../components/Button";
import { Card, CardItem } from "native-base";
import Loader from "../components/Loader";

export default function NewsDetails({ navigation, route: { params } }) {
  const dispatch = useDispatch();
  const [comment, setComment] = React.useState("");
  const { comments, isLoading } = useSelector((state) => state.comments);
  const defaultImage =
    "https://lh3.googleusercontent.com/proxy/YKSgQxCMHJraD0dW8afdPheVXfZEWyGoIVcF0zrMhYdx9WFqeZGm4fU9FHg8MaLRken_eHKaD7mnJ7j6f5Lfom6vShg";

  React.useEffect(() => {
    dispatch(fetchAllComments(params.article.url));
  }, [params.article]);

  const commentHandler = (articleUrl) => {
    if (comment.length === 0) return;
    dispatch(addComment(comment, articleUrl));
    setComment("");
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
          />
          <View>
            <Card style={styles.action}>
              <TextInput
                testID="comments"
                placeholder="Write comments here..."
                type="comments"
                onChangeText={(comment) => setComment(comment)}
                value={comment}
                style={styles.textInput}
                multiline={true}
                numberOfLines={3}
              />
              <View style={styles.buttonWrapper}>
                <Button
                  title="Submit"
                  onPress={() => commentHandler(params.article.url)}
                  color="#fff"
                  fontSize={11}
                  size={10}
                  style={[
                    styles.button,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                />
              </View>
            </Card>
            <View>
              {comments.length === 0 ? (
                <Text
                  style={{ alignSelf: "center", marginTop: 35, fontSize: 12 }}
                >
                  Be the first to comment
                </Text>
              ) : (
                !isLoading &&
                comments.map((comment, index) => [
                  <Card key={index}>
                    <CardItem key={index} cardBody>
                      <View style={styles.commentWrapper}>
                        <Text style={styles.commentHeader}>
                          {comment.userEmail}
                        </Text>
                        <Text style={styles.commentText}>
                          {comment.comment}
                        </Text>
                      </View>
                    </CardItem>
                  </Card>,
                ])
              )}
            </View>
          </View>
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
  commentWrapper: {
    padding: 3,
  },
  textInput: {
    fontSize: 12,
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
  commentHeader: {
    paddingLeft: 6,
    color: "#00A6FB",
    fontSize: 10,
    fontWeight: "bold",
  },
  commentText: {
    color: "#333",
    padding: 5,
    flexDirection: "column",
  },
});
