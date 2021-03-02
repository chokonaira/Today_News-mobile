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
    initialRouteName="News"
      tabBarOptions={{
        activeTintColor: "#00A6FB",
        inactiveTintColor: "#bde0fe",
        tabStyle: {
          marginTop: Platform.OS === "ios" ? 6 : 13,
        },
        labelStyle: {
          fontWeight: "bold",
          marginBottom: 3,
        }
      }}
    >
      <Tab.Screen
        name="News"
        component={Drawers}
        options={() => ({
          tabBarIcon: () => {
            return (
              <NewsIcon
                name="book-open"
                size={23}
                color={'#00A6FB'}
                style={{ paddingBottom: 5 }}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteNewsStacks}
        options={{
          tabBarIcon: () => {
            return (
              <FavIcon
                name="heart"
                size={23}
                color={'#00A6FB'}
                style={{ paddingBottom: 5 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
