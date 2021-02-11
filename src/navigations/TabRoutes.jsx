import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile'
import TodayNews from '../screens/TodayNews'
import FavoriteNews from '../screens/FavoriteNews'


const Tabs = createBottomTabNavigator();

const TabsRoutes = () => {
  return (
    <Tabs.Navigator >
      <Tabs.Screen name="Today News" component={TodayNews} />
      <Tabs.Screen name="Favorite News" component={FavoriteNews} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

export default TabsRoutes;