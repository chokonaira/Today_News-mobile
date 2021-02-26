import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TodayNewsStacks, ProfileStacks, FaqsStacks } from "./Stacks";

const Drawer = createDrawerNavigator();

export function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Latest News" component={TodayNewsStacks} />
      <Drawer.Screen name="Profile" component={ProfileStacks} />
      <Drawer.Screen name="Faqs" component={FaqsStacks} />
    </Drawer.Navigator>
  );
}
