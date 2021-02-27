import * as React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Drawers } from "./Drawers";
import { FavoriteNewsStacks } from "./Stacks";
import NewsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FavIcon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Today News"
      activeColor="#333"
      tabBarOptions={{
        activeTintColor: "#00A6FB",
        inactiveTintColor: "#333",
        tabStyle: {
          padding: 2,
          margin: Platform.OS === "ios" ? 2 : 10,
        },
        labelStyle: {
          fontWeight: "bold",
          marginBottom: 3,
        },
        style: {
          height: Platform.OS === "ios" ? "8.65%" : "8*%",
        },
      }}
    >
      <Tab.Screen
        name="Today News"
        component={Drawers}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return (
              <NewsIcon
                name="book-open"
                size={25}
                color={color}
                style={{ paddingBottom: 5 }}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Favorites News"
        component={FavoriteNewsStacks}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <FavIcon
                name="heart"
                size={25}
                color={color}
                style={{ paddingBottom: 5 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
