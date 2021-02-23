import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import TodayNews from "../screens/TodayNews";
import FavoriteNews from "../screens/FavoriteNews";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={TodayNews} />
      <Tab.Screen name="Favorite News" component={FavoriteNews} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
