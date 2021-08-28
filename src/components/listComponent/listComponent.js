import React from 'react';
import { Text, StyleSheet, SectionList, SafeAreaView } from 'react-native';
import ListItem from '../list-item-border-bootom/list-item-border-bootom'

const ListComponent = ({ navigation, data }) => {
    return (
        <SafeAreaView style={[styles.container]}>
                <SectionList
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <ListItem navigation={navigation} data={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
        </SafeAreaView>
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
        marginLeft: 5,
        color: '#22c181'
    }
})

export default ListComponent