
import React, { useState } from "react";
import { Button, Text, StyleSheet, StatusBar, View } from "react-native";

const StatusBarComponent = () => {
    const styleTypes = ['default', 'dark-content', 'light-content'];
    const [visibleStatusBar, setVisibleStatusBar] = useState(false);
    const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

    const changeVisibilityStatusBar = () => {
        setVisibleStatusBar(!visibleStatusBar);
    };

    const changeStyleStatusBar = () => {
        const styleId = styleTypes.indexOf(styleStatusBar) + 1;

        if (styleId === styleTypes.length) {
            return setStyleStatusBar(styleTypes[0]);
        }
        return setStyleStatusBar(styleTypes[styleId]);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textStyle}>状态栏样式: {styleStatusBar}</Text>
                <Text style={styles.textStyle}>状态栏可见性: {!visibleStatusBar ? '可见' : '不可见'}</Text>
            </View>
            <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
            <View>
                <StatusBar hidden={visibleStatusBar} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="切换状态栏" onPress={() => changeVisibilityStatusBar()} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="改变状态栏样式" onPress={() => changeStyleStatusBar()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
        padding: 8
    },
    buttonContainer: {
        padding: 10
    },
    textStyle: {
        textAlign: 'center'
    }
});

export default StatusBarComponent;