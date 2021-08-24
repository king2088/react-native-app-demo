import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Item extends Component {
    constructor(props) {
        super(props)
    }

    onPress() {

    }

    render() {
        return (
            <TouchableHighlight onPress={this.onPress}>
                <View style={styles.item}>
                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={styles.listIcons}>
                        <MaterialCommunityIcons name="chevron-right" color={'#ddd'} size={20}/>
                    </View>
                </View>
            </TouchableHighlight>
        )
    };
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 10,
        paddingLeft: 20,
        marginVertical: 0.5,
        flexDirection: "row",
    },
    titleWrap: {
        flex: 0.9,
    },
    listIcons: {
        flex: 0.1,
        // textAlign: 'right',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 16
    }
})

export default Item