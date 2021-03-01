import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Main from "./src/Main";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });
};

export default function App() {
  const [fontsLoading, setFontsLoading] = React.useState(false);

  if (!fontsLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoading(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Main />
    </Provider>
  );
}
