import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const HeightTextInput = (props) => {
    return (
        <TextInput
            {...props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
            editable
            maxLength={40}
        />
    );
}

const TextInputComponents = () => {
    const [value, onChangeText] = useState('输入文本内容');
    const [value2, onChangeText2] = useState('输入英文颜色试试看，如：red、blue、#ddd等');
    return (
        <View>
            <TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={value}></TextInput>
            <View
                style={{
                    backgroundColor: value2,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                    marginTop: 20,
                }}>
                <HeightTextInput
                    multiline // 多行
                    numberOfLines={4}
                    onChangeText={text => onChangeText2(text)}
                    value={value2}
                />
            </View>
            <TextInput textContentType='password' secureTextEntry={true} style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'blue',
        backgroundColor: '#fff',
        marginTop: 20
    }
})

export default TextInputComponents