import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";

const BackHandlerComponent = () => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert("注意!", "确定要退出APP吗?", [
                {
                    text: "否",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "是", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>点击手机返回按键或手势</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default BackHandlerComponent;