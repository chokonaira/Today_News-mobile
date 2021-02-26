import * as React from "react";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import TodayNews from "../screens/TodayNews";
import FavoriteNews from "../screens/FavoriteNews";
import Profile from "../screens/Profile";
import Faqs from "../screens/Faqs";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator(),
  TodayNewsStack = createStackNavigator(),
  FavoriteNewsStack = createStackNavigator(),
  ProfileStack = createStackNavigator(),
  FaqsStack = createStackNavigator();

function AuthStacks() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="Home"
    >
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
    </AuthStack.Navigator>
  );
}

function TodayNewsStacks() {
  return (
    <TodayNewsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TodayNewsStack.Screen name="Today News" component={TodayNews} />
    </TodayNewsStack.Navigator>
  );
}

function FavoriteNewsStacks() {
  return (
    <FavoriteNewsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <FavoriteNewsStack.Screen name="Favorite News" component={FavoriteNews} />
    </FavoriteNewsStack.Navigator>
  );
}

function ProfileStacks() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

function FaqsStacks() {
  return (
    <FaqsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <FaqsStack.Screen name="Faqs" component={Faqs} />
    </FaqsStack.Navigator>
  );
}

export {
  AuthStacks,
  TodayNewsStacks,
  FavoriteNewsStacks,
  ProfileStacks,
  FaqsStacks,
};
