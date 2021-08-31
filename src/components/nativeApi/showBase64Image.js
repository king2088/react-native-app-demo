import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ShowBase64Image = ({navigation}) => {
    let base64 = `data:image/png;base64,${navigation.getState().routes[2].params.base64}`
    // console.log(base64);
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
        width: '100%',
        height: '100%'
    }
})

export default ShowBase64Image