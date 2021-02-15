import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
// import * as firebase from "firebase";
// import { firebaseConfig } from "./src/config/firebase";

// firebase.initializeApp(firebaseConfig);

import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import StackRoutes from "./src/navigations/StackRoutes";
import TabsRoutes from "./src/navigations/TabRoutes";
import { Provider } from "react-redux";
import store from "./src/redux/store";



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <StackRoutes />
          {/* < TabsRoutes /> */}
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
