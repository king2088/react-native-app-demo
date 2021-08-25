import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={this.props.height == 0 ? styles.no_header : styles.header}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    header: {
        padding: 15, 
        backgroundColor: '#22c181',
    },
    no_header: {
        padding: 15, 
        backgroundColor: '#22c181',
        display: 'none'
    },
    title: {
        color: '#fff',
        fontSize:20
    }
})

export default Header