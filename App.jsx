import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import StackRoutes from './src/navigations/StackRoutes';
import TabsRoutes from "./src/navigations/TabRoutes";


const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* < StackRoutes /> */}
        < TabsRoutes />
      </View>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
