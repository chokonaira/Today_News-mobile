import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Drawers } from "./Drawers";
import { FavoriteNewsStacks } from "./Stacks";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Latest News" component={Drawers} />
      <Tab.Screen name="Your Favorites" component={FavoriteNewsStacks} />
    </Tab.Navigator>
  );
}
