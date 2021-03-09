import * as React from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TodayNewsStacks, ProfileStacks, HomeStacks } from "./Stacks";
import DrawerContent from "../components/DrawerContent";
import NewsDetails from "../screens/NewsDetails";

const Drawer = createDrawerNavigator();

export function Drawers() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerStyle={isLargeScreen ? null : { width: "65%" }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="News" component={TodayNewsStacks} />
      <Drawer.Screen name="Profile" component={ProfileStacks} />
      <Drawer.Screen name="Home" component={HomeStacks} />
      <Drawer.Screen name="Details" component={NewsDetails} />
    </Drawer.Navigator>
  );
}
