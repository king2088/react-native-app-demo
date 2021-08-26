// 集成 stack navigation
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from '@react-navigation/elements'

import Tabs from "../../pages/tabs/tabs";
import ViewComponents from "../homeComponents/ViewComponents/ViewComponents";
import HomeScreen from "../../pages/home/home";
import Header from "../header/header";
import CodeShow from "../showComponentCode/showComponentCode";
import TextComponents from "../homeComponents/TextComponents/TextComponents";

const Stack = createStackNavigator();  // creates object for Stack Navigator

export const CustomNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="ViewComponents"
        component={ViewComponents}
      />
       */}
    </Stack.Navigator>
  )
}

export const HomeScreenNavigation = () => {
  const screenOptionss = ({ route }) => {
    return {
        // header部分
        header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            const canGoBack = navigation.canGoBack()
            let height = 1
            return <Header title={title.indexOf('Components')>-1 ? '组件' : title} canGoBack={canGoBack} height={height} navigation={navigation} route={route}/>;
        },
    }
}
  return (
    <Stack.Navigator screenOptions={screenOptionss}>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{ title: "首页" }}
      />
      <Stack.Screen
        name="ViewComponents"
        component={ViewComponents}
        options={{ title: "组件" }}
      />
      <Stack.Screen
        name="CodeShow"
        component={CodeShow}
        options={{ title: "代码" }}
      />
      <Stack.Screen
        name="TextComponents"
        component={TextComponents}
      />
    </Stack.Navigator>
  )
}