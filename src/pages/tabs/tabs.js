import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from  '../../../assets/images/home.png'
import HomeIconActive from '../../../assets/images/home-active.png'
import MapIcon from  '../../../assets/images/map.png'
import MapIconActive from  '../../../assets/images/map-active.png'
import ApiIcon from  '../../../assets/images/api.png'
import ApiIconActive from  '../../../assets/images/api-active.png'
import SettingIcon from  '../../../assets/images/setting.png'
import SettingIconActive from  '../../../assets/images/setting-active.png'

import HomeScreen from '../home/home';
import MapScreen from '../map/map';
import ApiScreen from '../api/api';
import SettingScreen from '../setting/setting';

const Tab = createBottomTabNavigator();



function Tabs() {
    const screenOptionss = ({ route }) => {
        return {
            tabBarIcon: ({ focused, color, size }) => {
                let icons = {
                    home: focused ? HomeIconActive : HomeIcon,
                    map: focused ? MapIconActive : MapIcon,
                    api: focused ? ApiIconActive : ApiIcon,
                    setting: focused ? SettingIconActive : SettingIcon
                }
                //可以返回任何组件
                return <Image source={icons[(route.name).toLowerCase()]} style={styles.tabIcons}/>
            },
            tabBarActiveTintColor: '#1296db',
        }
    }
    return (
        <Tab.Navigator screenOptions={screenOptionss} initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3, title: "首页" }} />
            <Tab.Screen name="Map" component={MapScreen} options={{ title: "地图" }} />
            <Tab.Screen name="Api" component={ApiScreen} options={{ title: "接口" }} />
            <Tab.Screen name="Setting" component={SettingScreen} options={{ title: "设置" }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabIcons: {
      width: 28,
      height: 28,
    }
  });

export default Tabs