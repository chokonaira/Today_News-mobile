import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./navigations/Stacks";
import Tabs from "./navigations/Tabs";
import { useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

function Index() {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.isLoading);

  if (authenticated) {
    return (
      <View style={styles.container}>
        <Spinner
          animation="none"
          color="#fff"
          visible={loading}
          textStyle={{ color: "#fff" }}
          overlayColor="rgba(0, 0, 0, 0.9)"
          textStyle={{ color: "#fff" }}
          textContent="Loading..."
        />
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Spinner
        animation="none"
        color="#fff"
        visible={loading}
        textStyle={{ color: "#fff" }}
        overlayColor="rgba(0, 0, 0, 0.9)"
        textStyle={{ color: "#fff" }}
        textContent="Loading..."
      />
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    opacity: 0.5,
    backgroundColor: "red",
  },
});
