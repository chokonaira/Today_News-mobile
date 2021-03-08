import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
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
  author,
  sourceName,
  onCardPress,
  onFavoritePress,
  onCommentPress,
  imageUrl,
  color,
  title,
}) {
  return (
    <Card>
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
      <TouchableOpacity onPress={onCardPress}>
        <CardItem cardBody>
          <Image
            source={{
              uri: imageUrl,
            }}
            indicator={ProgressBar}
            indicatorProps={{
              size: 35,
              color: "#00A6FB",
              unfilledColor: "rgba(200, 200, 200, 0.2)",
            }}
            style={styles.image}
          />
        </CardItem>
        <View numberOfLines={2}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      <CardItem>
        <Left>
          <Button onPress={onCommentPress} transparent>
            <Icon active name="chatbubbles" />
            <Text>Comments</Text>
          </Button>
        </Left>
        <Right>
          <Button onPress={onFavoritePress} transparent>
            <FavIcon
              name="heart"
              size={23}
              color={color}
              style={{ marginRight: 15 }}
            />
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: { height: 100, flex: 1 },
  title: { margin: 8, height: 30, fontSize: 12 },
});
