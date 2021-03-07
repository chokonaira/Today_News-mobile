import * as React from "react";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import TodayNews from "../screens/News";
import FavoriteNews from "../screens/Favorites";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator(),
  TodayNewsStack = createStackNavigator(),
  FavoriteNewsStack = createStackNavigator(),
  ProfileStack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: "red",
  },
  headerShown: false,
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

function AuthStacks() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen name="News" component={TodayNewsStacks} />
    </AuthStack.Navigator>
  );
}

function TodayNewsStacks() {
  return (
    <TodayNewsStack.Navigator screenOptions={screenOptions}>
      <TodayNewsStack.Screen name="News" component={TodayNews} />
    </TodayNewsStack.Navigator>
  );
}

function FavoriteNewsStacks() {
  return (
    <FavoriteNewsStack.Navigator screenOptions={screenOptions}>
      <FavoriteNewsStack.Screen name="Favorite News" component={FavoriteNews} />
    </FavoriteNewsStack.Navigator>
  );
}

function ProfileStacks() {
  return (
    <ProfileStack.Navigator screenOptions={screenOptions}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

export {
  AuthStacks,
  TodayNewsStacks,
  FavoriteNewsStacks,
  ProfileStacks,
};
