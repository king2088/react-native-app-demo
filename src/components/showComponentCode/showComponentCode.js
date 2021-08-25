import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';

class CodeShow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const copy = `
        # h1 Heading 8-)
 
        **This is some bold text!**
        
        This is normal text

        \`\`\` js

        function abc(){}

        \`\`\`
`;
        return (
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{ height: '100%' }}
                >
                    <Markdown>
                        {copy}
                    </Markdown>
                </ScrollView>
            </SafeAreaView>
        )
    };
}

export default CodeShow