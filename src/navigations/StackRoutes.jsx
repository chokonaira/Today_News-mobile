import * as React from "react";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import { createStackNavigator } from "@react-navigation/stack";

const Stacks = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stacks.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00A6FB",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="Home"
    >
      <Stacks.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stacks.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stacks.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
    </Stacks.Navigator>
  );
};

export default StackRoutes;
