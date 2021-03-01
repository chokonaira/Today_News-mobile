import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

export default function NewsCard() {
  const [article, setArticle] = React.useState([
    {
      id: 1,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 2,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 3,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 4,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 5,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 6,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 7,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 8,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 9,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
    {
      id: 10,
      author: "Henry",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      imageUrl:
        "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
    },
  ]);
// React.useEffect(()=>{

// })
  return (
    <View style={styles.container}>
      <ScrollView>
        {article.map((article) => {
          return (
            <Card key={article.id}>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: "Image URL" }} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
                  }}
                  style={{ height: 120, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 20,
    paddingHorizontal: 8,
  },
  card: {},
  article: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#00A6FB",
    fontSize: 15,
  },
  cardHeader: {
    backgroundColor: "white",
    // height: "20%",
  },
  cardBody: {
    height: "60%",
    width: "100%",
  },
  cardBodyImage: {},
  cardBodyText: {
    height: "40%",
    padding: 2,
  },
  cardFooter: {
    backgroundColor: "white",
    height: "20%",
  },
});
