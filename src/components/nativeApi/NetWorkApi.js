import { NetworkInfo } from 'react-native-network-info';
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from 'react-native'

const NetWorkApi = () => {
    const [net, setNet] = useState({})
    useEffect(async () => {
        let obj = {
            ip: await NetworkInfo.getIPAddress(),
            gwIp: await NetworkInfo.getGatewayIPAddress(),
            ssid: await NetworkInfo.getBSSID(),
        }
        setNet(obj)
    })
    return (
        <View style={styles.wrap}>
            <Text>IP:{net.ip}</Text>
            <Text>网关:{net.gwIp}</Text>
            <Text>ssid:{net.ssid}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        margin: 10
    }
})

export default NetWorkApi