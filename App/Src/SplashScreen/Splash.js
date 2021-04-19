import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SplashScreen extends Component {

    async componentDidMount() {
        const TOKEN = await AsyncStorage.getItem('LOGIN');
        setTimeout(() => {
            if (TOKEN) {
             this.props.navigation.replace('Home')
            }
            else {
                this.props.navigation.replace('Login')
            }
        }, 3000);

    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.txt}> Splash Screen </Text>
            </View>

        );
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:
    {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt:
    {
        fontSize: 22,
    }
})