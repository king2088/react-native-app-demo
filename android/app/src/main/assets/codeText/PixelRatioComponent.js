import React from "react";
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View } from "react-native";
const size = 50;
const cat = {
  uri: "https://reactnative.dev/docs/assets/p_cat1.png",
  width: size,
  height: size
};
const PixelRatioComponent = () => (
  <ScrollView>
    <View style={styles.container}>
      <Text>当前像素比为:</Text>
      <Text style={styles.value}>{PixelRatio.get()}</Text>
    </View>
    <View style={styles.container}>
      <Text>当前字体比例为:</Text>
      <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
    </View>
    <View style={styles.container}>
      <Text>当前设备上图片布局宽度为</Text>
      <Text style={styles.value}>{size} px</Text>
      <Image source={cat} />
    </View>
    <View style={styles.container}>
      <Text>要求图像像素宽度为</Text>
      <Text style={styles.value}>
        {PixelRatio.getPixelSizeForLayoutSize(size)} px
      </Text>
      <Image
        source={cat}
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(size),
          height: PixelRatio.getPixelSizeForLayoutSize(size)
        }}
      />
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: "2em",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4
  }
});
export default PixelRatioComponent;