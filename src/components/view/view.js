import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class ViewComponents extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        )
    };
}

export default ViewComponents