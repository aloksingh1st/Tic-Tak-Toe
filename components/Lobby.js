import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const App = ({ navigation }) => {

    const handlePress = () => {
        console.log('Button pressed!');
        navigation.navigate('lobby')
      };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.text}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 25,
        height: 816,
        backgroundColor: "#00ffa682",
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 350,
        cursor: 'pointer',
        backgroundColor: 'blue',
        padding: 15,
        paddingHorizontal:35,
        borderRadius: 5,
        color: 'white',
    
    },

    buttonText : {
        color: 'white',
    }
});


export default App;