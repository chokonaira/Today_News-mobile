import * as React from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TodayNewsStacks, ProfileStacks } from "./Stacks";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export function Drawers() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerStyle={isLargeScreen ? null : { width: "65%" }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Today News" component={TodayNewsStacks} />
      <Drawer.Screen name="Profile" component={ProfileStacks} />
    </Drawer.Navigator>
  );
}
