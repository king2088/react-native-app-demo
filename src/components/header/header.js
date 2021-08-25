import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {navigation, height, title} = this.props
        const canGoBack = navigation.canGoBack()
        let stylebYBackIcon = canGoBack ? styles.headerLeft : styles.headerLeftHidden
        return (
            <View style={height == 0 ? styles.no_header : styles.header}>
                <MaterialIcons name="keyboard-arrow-left" size={30} style={stylebYBackIcon} onPress={()=> {canGoBack ? navigation.goBack() : null}} />
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        paddingLeft: 5,
        paddingRight: 5, 
        backgroundColor: '#22c181',
        flexDirection: 'row',
    },
    no_header: {
        padding: 15, 
        backgroundColor: '#22c181',
        display: 'none'
    },
    headerLeft: {
        flex: 0.2,
        color: '#fff',
    },
    headerLeftHidden: {
        flex: 0.2,
        color: '#22c181'
    },
    headerTitle: {
        flex: 0.6,
        color: '#fff',
        fontSize:20,
        textAlign: 'center'
    },
    headerRight: {
        flex: 0.2,
        color: '#fff',
    }
})

export default Header