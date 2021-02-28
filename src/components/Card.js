import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default function Card() {
  return (
    <>
      <View style={styles.card}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "98%",
    height: "30%",
    alignSelf: "center",
    marginTop: "1%",
  },
  cardHeader: {
    backgroundColor: "white",
    height: "20%",
  },
  cardBody: {
    height: "60%",
    width: "100%",
  },
  cardBodyImage: {
    padding: 2,
    height: "60%",
  },
  cardBodyText: {
    height: "40%",
    padding: 2,
  },
  cardFooter: {
    backgroundColor: "white",
    height: "20%",
  },
});
