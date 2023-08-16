import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Messages</Text>
            <Text style={styles.label}>People</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },

    label: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});


export default InfoScreen;
