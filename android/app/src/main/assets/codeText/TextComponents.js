import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TextComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleText: '这是标题',
            bodyText: '这是内容区'
        }
    }

    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>
                    {this.state.titleText}
                    {"\n"}
                    {"\n"}
                </Text>
                <Text numberOfLines={5}>{this.state.bodyText}</Text>
            </Text>
        )
    };
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default TextComponents