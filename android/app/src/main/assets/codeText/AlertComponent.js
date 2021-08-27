import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const AlertComponent = () => {
    const createTwoButtonAlert = () =>
        Alert.alert(
            "标题",
            "这里是提示内容",
            [
                {
                    text: "关闭",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "确定", onPress: () => console.log("OK Pressed") }
            ]
        );

    const createThreeButtonAlert = () =>
        Alert.alert(
            "标题",
            "这里是提示内容",
            [
                {
                    text: "稍后询问",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "关闭",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "确定", onPress: () => console.log("OK Pressed") }
            ]
        );

    return (
        <View style={styles.container}>
            <Button title={"2个按钮的Alert"} onPress={createTwoButtonAlert} />
            <Button title={"3个按钮的Alert"} onPress={createThreeButtonAlert} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default AlertComponent;