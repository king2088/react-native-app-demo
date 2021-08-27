import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

const ButtonComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewMargin}>
                <Button color="blue" title="按钮"></Button>
            </View>
            <View style={styles.viewMargin}>
                <Button color="blue" title="不能点击的按钮" disabled></Button>
            </View>
            <View style={styles.viewMargin}>
                <Button color="#333" title="颜色为#333的按钮" onPress={() => {Alert.alert('你点击了“颜色为#333的按钮”')}}></Button>
            </View>
            <View style={styles.row}>
                <Button color='cyan' title="颜色为cyan的按钮"></Button>
                <Button color='red' title="颜色为red的按钮"></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    viewMargin: {
        marginBottom: 20
    },
    scrollView: {
        padding: 10,
        backgroundColor: '#ccc'
    },
    text: {
        fontSize: 40
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default ButtonComponent