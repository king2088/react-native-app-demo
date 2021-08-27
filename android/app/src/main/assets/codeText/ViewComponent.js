import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ViewComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRow: true
        }
    }

    render() {
        return (
            // view就像div一样，可以用它随时随地进行视图布局
            <View>
                <View style={this.state.isRow ? styles.viewRow : styles.viewClum} onStartShouldSetResponder={() => {this.setState({isRow: !this.state.isRow})}}>
                    <View style={styles.view1}><Text>{'View1'}</Text></View>
                    <View style={styles.view2}><Text>{'View2'}</Text></View>
                    <View style={styles.view3}><Text>{'View3'}</Text></View>
                </View>
                <View style={styles.viewText}>
                    <Text>{'点击上面的View视图进行横纵向切换'}</Text>
                    <Text>{'view就像div一样，可以用它随时随地进行视图布局'}</Text>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    viewRow: {
        flexDirection: 'row',
        height: 200
    },
    viewClum: {
        height:200
    },
    view1: {
        flex: 0.2,
        backgroundColor: 'red'
    },
    view2: {
        flex: 0.3,
        backgroundColor: 'blue'
    },
    view3: {
        flex: 0.5,
        backgroundColor: 'cyan'
    },
    viewText: {
        lineHeight: 2,
        margin: 20
    }
})

export default ViewComponent