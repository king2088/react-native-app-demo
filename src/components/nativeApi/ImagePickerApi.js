import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

const ImagePickerApi = ({ navigation }) => {
    const [result, setResult] = useState('')

    let options = {
        mediaType: 'photo'
    }

    const openCamera = () => {
        launchCamera(options, (res) => {
            console.log(res);
            let result = JSON.stringify(res)
            setResult(result)
        })
    }

    const openPhoto = () => {
        launchImageLibrary(options, (res) => {
            console.log(res);
            let result = JSON.stringify(res)
            setResult(result)
        })
    }

    return (
        <View>
            <View style={styles.box}/>
            <Button onPress={() => {openCamera()}} title="打开相机拍照"/>
            <View style={styles.box}/>
            <Button onPress={() => {openPhoto()}} title="打开相册选择照片"/>
            <View style={styles.box}/>
            {result ? <Text style={styles.text}>{result}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginVertical: 10
    },
    text: {
        lineHeight: 30,
        color: '#333',
        padding: 10,
        backgroundColor: '#CCC'
    }
})

export default ImagePickerApi;