import React from "react";
import { StyleSheet, Text, View, PermissionsAndroid, Button } from "react-native";

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "申请摄像头权限",
                message: "此APP需要使用摄像头权限",
                buttonNeutral: "稍后再说",
                buttonNegative: "关闭",
                buttonPositive: "确定"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

const PermissionsAndroidComponent = () => (
    <View style={styles.container}>
        <Text style={styles.item}>申请权限</Text>
        <Button title="请求摄像头权限" onPress={requestCameraPermission} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    item: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default PermissionsAndroidComponent;