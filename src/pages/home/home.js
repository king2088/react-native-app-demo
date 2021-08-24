import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';
import Item from '../../components/list-item-border-bootom/list-item-border-bootom'

const DATA = [
    {
        title: "基础组件",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "交互控件",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "列表视图",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "iOS 独有组件",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Android 独有组件",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: '其他',
        data: ["Cheese Cake", "Ice Cream"]
    }
];

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 18,
        backgroundColor: "#f2f2f2",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default HomeScreen