import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStacks } from "./navigations/Stacks";
import { Tabs } from "./navigations/Tabs";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

export default function Main() {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.isLoading);

  if (!authenticated) {
    return (
      <View style={styles.container}>
        <Loader visible={loading} />
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <NavigationContainer>
        <AuthStacks />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
