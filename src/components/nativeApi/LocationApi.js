import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, PermissionsAndroid, Platform } from "react-native";
import Geolocation from 'react-native-geolocation-service';

const LocationApi = () => {
    const [position, setPosition] = useState('')
    useEffect(async () => {
        if (Platform.OS == 'android') {
            let permission1 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, // ACCESS_FINE_LOCATION
                {
                    title: '获取定位权限',
                    message: '需要获取定位权限'
                }
            )
            let permission2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, // ACCESS_FINE_LOCATION
                {
                    title: '获取定位权限',
                    message: '需要获取定位权限'
                }
            )
            if (permission1 != PermissionsAndroid.RESULTS.GRANTED || permission2 != PermissionsAndroid.RESULTS.GRANTED) {
                console.log('获取权限失败');
            }
        }
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                if (position.coords) {
                    let p = `当前经纬度\n\n${position.coords.latitude}, ${position.coords.longitude}`
                    setPosition(p)
                }
            },
            (error) => {
                console.log(error.code, error.message);
                setPosition(error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    })

    return (
        <Text style={styles.text}>{position}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 100,
        color: 'red',
        fontSize: 16
    }
})

export default LocationApi