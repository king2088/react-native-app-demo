import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ShowBase64Image = ({navigation}) => {
    const base64 = `data:image/png;base64,${navigation.getState().routes[2].params.base64}`
    console.log(base64);
    return (
        <View style={styles.container}>
            <Image style={styles.images} source={{uri: base64}}></Image>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
    },
    images: {
        width: 200
    }
})

export default ShowBase64Image