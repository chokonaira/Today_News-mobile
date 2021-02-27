import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Drawers } from "./Drawers";
import { FavoriteNewsStacks } from "./Stacks";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today News" component={Drawers} />
      <Tab.Screen name="Favorites News" component={FavoriteNewsStacks} />
    </Tab.Navigator>
  );
}
