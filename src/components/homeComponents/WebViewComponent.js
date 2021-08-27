
import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewComponent = () => {
    return (
        <WebView
        source={{uri: 'http://www.egtch.com/'}}
        style={{marginTop: 20}}
      />
    )
}

export default WebViewComponent