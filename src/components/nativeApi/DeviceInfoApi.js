import { getAndroidId, getApplicationName, getBatteryLevel, getVersion, getSystemVersion,getSystemName, getSerialNumber, getIpAddress, getDeviceId } from 'react-native-device-info';
import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";

const DeviceInfoApi = () => {
    const [deviceInfo, setAndroidId] = useState({})

    useEffect(async () => {
        setAndroidId({
            androidId: await getAndroidId(),
            appName: getApplicationName(),
            batteryLevel: await getBatteryLevel(),
            version: getVersion(),
            sysVersion: getSystemVersion(),
            sysName: getSystemName(),
            serialNumber: await getSerialNumber(),
            ip: await getIpAddress(),
            deviceId: getDeviceId(),
        })
      })

    return (
        <View style={styles.container}>
            <Text>安卓Id: {deviceInfo.androidId}</Text>
            <Text>APP名字：{deviceInfo.appName}</Text>
            <Text>电量：{deviceInfo.batteryLevel*100+'%'}</Text>
            <Text>版本：{deviceInfo.version}</Text>
            <Text>系统版本：{deviceInfo.sysName + ' ' + deviceInfo.sysVersion}</Text>
            <Text>序列号：{deviceInfo.serialNumber}</Text>
            <Text>IP：{deviceInfo.ip}</Text>
            <Text>设备ID：{deviceInfo.deviceId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'column',
    }
})

export default DeviceInfoApi