import React, {useState} from 'react';
import { StyleSheet, View, Switch } from 'react-native';

const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "yellow", true: "green" }}
                thumbColor={isEnabled ? "red" : "blue"}
                ios_backgroundColor="green"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#CCC'
    },
})

export default SwitchComponent