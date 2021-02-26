import * as React from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TodayNewsStacks, ProfileStacks, FaqsStacks } from "./Stacks";

const Drawer = createDrawerNavigator();

export function Drawers() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerType={isLargeScreen ? "permanent" : "slide"}
      drawerStyle={isLargeScreen ? null : { width: "55%" }}
    >
      <Drawer.Screen name="Latest News" component={TodayNewsStacks} />
      <Drawer.Screen name="Profile" component={ProfileStacks} />
      <Drawer.Screen name="Faqs" component={FaqsStacks} />
    </Drawer.Navigator>
  );
}
