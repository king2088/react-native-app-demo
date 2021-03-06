// 集成 stack navigation
import React from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { getHeaderTitle } from '@react-navigation/elements'

import Tabs from "../../pages/tabs/tabs";
import ViewComponent from "../homeComponents/ViewComponent";
import HomeScreen from "../../pages/home/home";
import Header from "../header/header";
import CodeShow from "../showComponentCode/showComponentCode";
import TextComponent from "../homeComponents/TextComponent";
import ImageComponent from "../homeComponents/ImageComponent";
import TextInputComponent from "../homeComponents/TextInputComponent";
import ScrollViewComponent from "../homeComponents/ScrollViewComponent";
import StyleSheetComponent from "../homeComponents/StyleSheetComponent";
import ButtonComponent from "../homeComponents/ButtonComponent";
import SwitchComponent from "../homeComponents/SwitchComponent";
import FlatListComponent from "../homeComponents/FlatListComponent";
import SectionListComponent from "../homeComponents/SectionListComponent";
import BackHandlerComponent from "../homeComponents/BackHandlerComponent";
import DrawerLayoutAndroidComponent from "../homeComponents/DrawerLayoutAndroidComponent";
import PermissionsAndroidComponent from "../homeComponents/PermissionsAndroidComponent";
import ToastAndroidComponent from "../homeComponents/ToastAndroidComponent";
import ActivityIndicatorComponent from "../homeComponents/ActivityIndicatorComponent";
import AlertComponent from "../homeComponents/AlertComponent";
import AnimatedComponent from "../homeComponents/AnimatedComponent";
import DimensionsComponent from "../homeComponents/DimensionsComponent";
import KeyboardAvoidingViewComponent from "../homeComponents/KeyboardAvoidingViewComponent";
import LinkingComponent from "../homeComponents/LinkingComponent";
import ModalComponent from "../homeComponents/ModalComponent";
import PixelRatioComponent from "../homeComponents/PixelRatioComponent";
import RefreshControlComponent from "../homeComponents/RefreshControlComponent";
import StatusBarComponent from "../homeComponents/StatusBarComponent";
import WebViewComponent from "../homeComponents/WebViewComponent";
import CameraApi from "../nativeApi/CameraApi";
import ShowBase64Image from "../nativeApi/showBase64Image";
import VibrationApi from "../nativeApi/VibrationApi";
import DeviceInfoApi from "../nativeApi/DeviceInfoApi";
import PlayerApi from "../nativeApi/PlayerApi";
import ImagePickerApi from "../nativeApi/ImagePickerApi";
import LocationApi from "../nativeApi/LocationApi";
import NetWorkApi from "../nativeApi/NetWorkApi";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const screenOptionss = ({ route }) => {
  return {
    // header部分
    header: ({ navigation, route, options }) => {
      const title = getHeaderTitle(options, route.name);
      const canGoBack = navigation.canGoBack()
      let height = 1
      const _title = title.indexOf('Component') > -1 ? '组件' : title.indexOf('Api') > -1 ? '原生API' : title
      return <Header title={_title} canGoBack={canGoBack} height={height} navigation={navigation} route={route} />;
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }
}

export const CustomNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionss}>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CameraApi"
        component={CameraApi}
        options={{ title: '摄像头' }}
      />
      <Stack.Screen
        name="ShowBase64Image"
        component={ShowBase64Image}
        options={{ title: "图片" }}
      />
      <Stack.Screen
        name="VibrationApi"
        component={VibrationApi}
        options={{ title: '震动' }}
      />
      <Stack.Screen
        name="DeviceInfoApi"
        component={DeviceInfoApi}
        options={{ title: '设备信息' }}
      />
      <Stack.Screen
        name="PlayerApi"
        component={PlayerApi}
        options={{ title: '播放器', headerShown: false }}
      />
      <Stack.Screen
        name="ImagePickerApi"
        component={ImagePickerApi}
        options={{ title: '图片选择器' }}
      />
      <Stack.Screen
        name="LocationApi"
        component={LocationApi}
        options={{ title: '地理位置' }}
      />
      <Stack.Screen
        name="NetWorkApi"
        component={NetWorkApi}
        options={{ title: '网络信息' }}
      />
    </Stack.Navigator>
  )
}

export const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionss}>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{ title: "首页" }}
      />
      <Stack.Screen
        name="ViewComponent"
        component={ViewComponent}
        options={{ title: "组件" }}
      />
      <Stack.Screen
        name="CodeShow"
        component={CodeShow}
        options={{ title: "代码" }}
      />
      <Stack.Screen
        name="TextComponent"
        component={TextComponent}
      />
      <Stack.Screen
        name="ImageComponent"
        component={ImageComponent}
      />
      <Stack.Screen
        name="TextInputComponent"
        component={TextInputComponent}
      />

      <Stack.Screen
        name="ScrollViewComponet"
        component={ScrollViewComponent}
      />

      <Stack.Screen
        name="StyleSheetComponent"
        component={StyleSheetComponent}
      />
      <Stack.Screen
        name="ButtonComponent"
        component={ButtonComponent}
      />
      <Stack.Screen
        name="SwitchComponent"
        component={SwitchComponent}
      />
      <Stack.Screen
        name="FlatListComponent"
        component={FlatListComponent}
      />
      <Stack.Screen
        name="SectionListComponent"
        component={SectionListComponent}
      />
      <Stack.Screen
        name="BackHandlerComponent"
        component={BackHandlerComponent}
      />
      <Stack.Screen
        name="DrawerLayoutAndroidComponent"
        component={DrawerLayoutAndroidComponent}
      />
      <Stack.Screen
        name="PermissionsAndroidComponent"
        component={PermissionsAndroidComponent}
      />
      <Stack.Screen
        name="ToastAndroidComponent"
        component={ToastAndroidComponent}
      />
      <Stack.Screen
        name="ActivityIndicatorComponent"
        component={ActivityIndicatorComponent}
      />
      <Stack.Screen
        name="AlertComponent"
        component={AlertComponent}
      />
      <Stack.Screen
        name="AnimatedComponent"
        component={AnimatedComponent}
      />
      <Stack.Screen
        name="DimensionsComponent"
        component={DimensionsComponent}
      />
      <Stack.Screen
        name="KeyboardAvoidingViewComponent"
        component={KeyboardAvoidingViewComponent}
      />
      <Stack.Screen
        name="LinkingComponent"
        component={LinkingComponent}
      />
      <Stack.Screen
        name="ModalComponent"
        component={ModalComponent}
      />
      <Stack.Screen
        name="PixelRatioComponent"
        component={PixelRatioComponent}
      />
      <Stack.Screen
        name="RefreshControlComponent"
        component={RefreshControlComponent}
      />
      <Stack.Screen
        name="StatusBarComponent"
        component={StatusBarComponent}
      />
      <Stack.Screen
        name="WebViewComponent"
        component={WebViewComponent}
      />
    </Stack.Navigator>
  )
}