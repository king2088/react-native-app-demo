import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TextComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleText: '你可以点击这里',
            bodyText: '这是内容区，文字小一点'
        }
    }

    onPressTitle() {
        this.setState({
            titleText: '标题已经被点击'
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={() => { this.onPressTitle() }}>
                        {this.state.titleText}
                        {"\n"}
                        {"\n"}
                    </Text>
                    <Text style={styles.content} numberOfLines={5}>{this.state.bodyText}</Text>
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
    },
    content: {
        color: 'blue'
    }
})

export default TextComponent