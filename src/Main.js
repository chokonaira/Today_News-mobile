import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStacks } from "./navigations/Stacks";
import { Tabs } from "./navigations/Tabs";
import { useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import * as Font from 'expo-font'

export default function Main() {
  const [fontsLoading, setFontLoading] = React.useState(true);
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.isLoading);

  React.useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
     }, [])

  if (!authenticated) {
    return (
      <View style={styles.container}>
        <Spinner
          animation="none"
          color="#fff"
          visible={loading}
          textStyle={{ color: "#fff" }}
          overlayColor="rgba(0, 0, 0, 0.9)"
          textStyle={{ color: "#fff" }}
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
      />
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
  loading: {
    opacity: 0.5,
    backgroundColor: "red",
  },
});
