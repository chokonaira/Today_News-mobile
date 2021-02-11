import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Text>Welcome</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
