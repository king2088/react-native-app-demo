import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RNCamera } from 'react-native-camera';

class CameraComponent extends Component {

    constructor(props) {
        super(props)
        this.camera = null
    }

    takePicture = async () => {
        try {
            let {navigation} = this.props
            const options = { quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options);
            // console.warn('Path to image: ' + data.base64);
            navigation.navigate('ShowBase64Image', {base64: data.base64})
        } catch (err) {
            console.log('err: ', err);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                />
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> 点击拍照 </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
// AppRegistry.registerComponent('App', () => CameraComponent);
export default CameraComponent