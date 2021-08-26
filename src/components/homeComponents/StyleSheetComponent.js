import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StyleSheetComponent = () => {
  return (
      <View style={styles.view}>
        <Text style={styles.text}>
          React-Native
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        backgroundColor: '#ccc',
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        color: 'blue',
        borderWidth: 4,
        borderColor: 'red',
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'yellow'
    }
})

export default StyleSheetComponent