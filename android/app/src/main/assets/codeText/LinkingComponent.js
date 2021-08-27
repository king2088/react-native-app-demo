import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";

const supportedURL = "https://google.com"; // 支持的连接

const unsupportedURL = "slack://open?team=123456"; // 不支持的连接

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const OpenSettingsButton = ({ children }) => {
    const handlePress = useCallback(async () => {
      // Open the custom settings if the app has one
      await Linking.openSettings();
    }, []);
  
    return <Button title={children} onPress={handlePress} />;
  };

const LinkingComponent = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>打开google</OpenURLButton>
      <View style={{height:10}}></View>
      <OpenURLButton url={unsupportedURL}>打开Slack</OpenURLButton>
      <View style={{height:10}}></View>
      <OpenSettingsButton>打开APP信息界面</OpenSettingsButton>
      <Text>除上面几种方法之外还可以获取Deep Link 及 发送 Intents (Android)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default LinkingComponent;