import React from "react";
import { StyleSheet, View } from "react-native";
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
import ProgressBar from "react-native-progress";
import Image from "react-native-image-progress";
import FavIcon from "react-native-vector-icons/AntDesign";

export default function NewsCard({
  key,
  author,
  sourceName,
  onPress,
  imageUrl,
  color,
}) {
  return (
    <Card key={key}>
      <View onPress={onPress}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: imageUrl,
              }}
            />
            <Body>
              <Text>{sourceName}</Text>
              <Text note>{author}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: imageUrl,
            }}
            indicator={ProgressBar}
            indicatorProps={{
              size: 50,
              color: "#00A6FB",
              unfilledColor: "rgba(200, 200, 200, 0.2)",
            }}
            style={{ height: 100, width: null, flex: 1 }}
          />
        </CardItem>
      </View>
      <CardItem>
        <Left>
          <Button transparent>
            <FavIcon
              name="heart"
              size={23}
              color={color}
              style={{ paddingBottom: 5 }}
            />
            <Text>12 favorites</Text>
          </Button>
        </Left>
        <Right>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
