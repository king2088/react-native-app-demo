import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Platform } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';
import fs from "react-native-fs";

class CodeShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            codeString: ''
        }
    }
    componentDidMount() {
        this.readFile()
    }

    async readFile() {
        let { route } = this.props
        let fileName = route.params.fileName
        console.log('fileName', fileName);
        let text = ''
        if(Platform.OS == 'android') {
            text = await fs.readFileAssets(`codeText/${fileName}.js`)
        }else {
            text = await fs.readFileAssets(`codeText/${fileName}.js`)
        }
        console.log(text, typeof text);
        this.setState({
            codeString: text
        })
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{ height: '100%' }}
                >
                    <SyntaxHighlighter
                        language='javascript'
                        style={github}
                        highlighter={"hljs"}
                    >
                        {this.state.codeString}
                    </SyntaxHighlighter>
                </ScrollView>
            </SafeAreaView>
        )
    };
}

export default CodeShow