import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {navigation, height, title, route} = this.props
        // console.log('route name', routeName);
        const routeName = route.name
        const canGoBack = navigation.canGoBack()
        let styleBackIcon = canGoBack ? styles.textLeft : styles.headerLeftOrRightHidden
        // console.log(navigation.getState());
        let styleCodeIcon = routeName.indexOf('Components') > -1 ? styles.textRight : styles.headerLeftOrRightHidden
        return (
            <View style={height == 0 ? styles.no_header : styles.header}>
                <View style={styles.headerLeft}>
                    <MaterialIcons name="keyboard-arrow-left" size={26} style={styleBackIcon} onPress={()=> {canGoBack ? navigation.goBack() : null}} />
                </View>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={styles.headerRight}>
                    <MaterialCommunityIcons name="code-tags" size={26} style={styleCodeIcon} route={route} onPress={()=> {canGoBack ? navigation.navigate('CodeShow', { fileName: routeName }) : null}} />
                </View>
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
    },
    headerLeftOrRightHidden: {
        flex: 0.2,
        color: '#22c181',
        display: 'none'
    },
    headerTitle: {
        flex: 0.6,
        color: '#fff',
        fontSize:20,
        textAlign: 'center',
    },
    textLeft: {
        color: '#fff',
        textAlign: 'left'
    },
    textRight: {
        color: '#fff',
        textAlign: 'right'
    },
    headerRight: {
        flex: 0.2,
        color: '#fff',
        textAlign: 'right'
    }
})

export default Header