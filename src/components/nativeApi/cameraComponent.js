import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Icon } from "react-native";
import { RNCamera } from 'react-native-camera';

const TakePicture = () => {
    let camera
    const takePicture = async () => {
        try {
            const data = await camera.takePictureAsync();
            console.log('Path to image: ' + data.uri);
        } catch (err) {
            // console.log('err: ', err);
        }
    }
    return (
        <View style={styles.container}>
            <RNCamera
                ref={cam => {
                    camera = cam;
                }}
                style={styles.preview}
            >
                <View style={styles.captureContainer}>
                    <TouchableOpacity style={styles.capture} onPress={()=> {takePicture}}>
                        <Icon style={styles.iconCamera}>camera</Icon>
                        <Text>Take Photo</Text>
                    </TouchableOpacity>
                </View>
            </RNCamera>
            <View style={styles.space} />
        </View>
    )
}

const CameraComponent = () => (
    <TakePicture></TakePicture>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default CameraComponent;