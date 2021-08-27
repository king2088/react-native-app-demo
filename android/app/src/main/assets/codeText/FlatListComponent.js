import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableHighlight, Text } from 'react-native';

const LIST_DATA = [
    { id: 1, name: '项目1' },
    { id: 2, name: '项目2' },
    { id: 3, name: '项目3' },
    { id: 4, name: '项目4' },
    { id: 5, name: '项目5' },
]

const Item = ({ item, onPress, style }) => (
    <TouchableHighlight onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.name}</Text>
    </TouchableHighlight>
)

const FlatListComponent = () => {
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "blue" : "green";
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    const [selectedId, setSelectedId] = useState(null);
    return (
        <View style={styles.container}>
            <FlatList
                data={LIST_DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: '#fff'
    },
});

export default FlatListComponent