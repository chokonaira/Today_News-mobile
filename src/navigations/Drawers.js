import * as React from "react";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TodayNewsStacks, ProfileStacks, FaqsStacks } from "./Stacks";
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export function Drawers() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerStyle={isLargeScreen ? null : { width: "60%" }}
      drawerContent={props => <DrawerContent {...props}/>}
    >
      <Drawer.Screen name="Today News" component={TodayNewsStacks} />
      <Drawer.Screen name="Profile" component={ProfileStacks} />
      <Drawer.Screen name="Faqs" component={FaqsStacks} />
    </Drawer.Navigator>
  );
}
