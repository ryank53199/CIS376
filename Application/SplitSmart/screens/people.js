import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';

const PeopleScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Messages</Text>
            <View style={styles.toggleButton}>
                <Button
                    title="Toggle"
                    onPress={() => navigation.navigate('Items')}
                    //style={styles.toggleButton}
                />
            </View>
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

    toggleButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },

});


export default PeopleScreen;
