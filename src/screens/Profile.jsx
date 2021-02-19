import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

function Profile({ navigation }) {
  return (
    <View style={styles.profile}>
      <Button
        primary
        small
        title="Log out"
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
});
