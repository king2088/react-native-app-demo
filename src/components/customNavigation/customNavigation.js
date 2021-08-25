// 集成 stack navigation
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "../../pages/tabs/tabs";
import ViewComponents from "../view/view";

import HomeScreen from "../../pages/home/home";

const Stack = createStackNavigator();  // creates object for Stack Navigator


export const CustomNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      <Stack.Screen
        name="ViewComponents"
        component={ViewComponents}
      />
    </Stack.Navigator>
  )
}

export const HomeScreenNavigation = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
          name="HomePage"
          component={HomeScreen}
        />
      <Stack.Screen
        name="ViewComponents"
        component={ViewComponents}
      />
    </Stack.Navigator>
  )
}