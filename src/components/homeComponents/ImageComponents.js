import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import IMG from '../../../../assets/images/1106041P33764.jpeg';

class ImageComponents extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <Image
                    style={styles.img}
                    source={IMG}
                />
                <Image
                    style={styles.base64}
                    source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                    }}
                />
            </ScrollView>
        )
    };
}

const styles = StyleSheet.create({
   img: {
       flex:1,
       alignContent: 'center',
       alignItems: 'center',
       justifyContent: 'center',
       width: '100%',
       resizeMode: 'cover',
       borderRadius: 50
   },
   base64: {
       width: 80,
       height: 80,
   }
})

export default ImageComponents