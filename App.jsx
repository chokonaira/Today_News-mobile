import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Index from "./src/Index";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Index />
    </Provider>
  );
}
