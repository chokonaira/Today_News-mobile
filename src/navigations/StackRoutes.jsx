import * as React from "react";
import Home from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
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
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <Stacks.Screen name="Signup" component={Signup} />
      <Stacks.Screen name="Login" component={Login} />
    </Stacks.Navigator>
  );
};

export default StackRoutes;
