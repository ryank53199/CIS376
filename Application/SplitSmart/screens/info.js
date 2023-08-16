import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Messages</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'left',
    },
});


export default InfoScreen;
