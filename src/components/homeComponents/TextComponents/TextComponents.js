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

    onPressTitle() {
        setTitleText("Bird's Nest [pressed]");
    }

    render() {
        return (
            <View>
                <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={() => {this.onPressTitle}}>
                    {this.state.titleText}
                    {"\n"}
                    {"\n"}
                </Text>
                <Text numberOfLines={5}>{this.state.bodyText}</Text>
            </Text>
            </View>
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