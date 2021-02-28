import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";

export default function Card() {
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

  return (
    <View style={styles.container}>
      <ScrollView>
        {article.map((article) => {
          return (
            <View key={article.id} style={styles.card}>
              <View></View>
              <View>
                {/* <Image
                  style={styles.card}
                  source={{
                    uri:
                      "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
                  }}
                /> */}
                <Text style={styles.article}>{article.content}</Text>
              </View>
              <View></View>
            </View>
          );
        })}
      </ScrollView>

      {/* <View style={styles.card}>
        <View style={styles.cardHeader}></View>
        <View style={styles.cardBody}>
          <Image
            style={styles.cardBodyImage}
            source={{
              uri:
                "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2020/04/Combo-Logo-CHICAGO.png?w=1500",
            }}
          />
          <Text style={styles.cardBodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>
        <View style={styles.cardFooter}></View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}></View>
        <View style={styles.cardBody}>
          <Image
            style={styles.cardBodyImage}
            source={{
              uri:
                "https://www.todayjaffna.com/wp-content/uploads/2020/12/FS-MON-BREAKING-NEWS-.png",
            }}
          />
          <Text style={styles.cardBodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>
        <View style={styles.cardFooter}></View>
      </View> */}
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
  card: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
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
