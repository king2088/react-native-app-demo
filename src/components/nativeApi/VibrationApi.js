import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Vibration, Button } from "react-native";

const VibrationApi = () => {
    const Separator = () => {
        return <View style={Platform.OS === 'android' ? styles.separator : null} />;
    };
    const ONE_SECOND_IN_MS = 1000;
    const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];
    const PATTERN_DESC =
        Platform.OS === 'android'
            ? '等待1s, 震动2s, 等待3s'
            : '等待 1s, 震动, 等待 2s, 震动, 等待 3s';
    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.header, styles.paragraph]}>震动演示</Text>
            <View>
                <Button title="震动一次" onPress={() => Vibration.vibrate()} />
            </View>
            <Separator />
            {Platform.OS == 'android'
                ? [
                    <View>
                        <Button
                            title="震动10秒"
                            onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
                        />
                    </View>,
                    <Separator />,
                ]
                : null}
            <Text style={styles.paragraph}>模式: {PATTERN_DESC}</Text>
            <Button title="按上面的模式震动" onPress={() => Vibration.vibrate(PATTERN)} />
            <Separator />
            <Button
                title="连续震动，除非用户手动取消"
                onPress={() => Vibration.vibrate(PATTERN, true)}
            />
            <Separator />
            <Button title="取消震动" onPress={() => Vibration.cancel()} color="#FF0000" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraph: {
        margin: 24,
        textAlign: 'center',
    },
    separator: {
        marginVertical: 8,
    },
});

export default VibrationApi