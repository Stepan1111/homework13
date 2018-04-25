import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
}
from 'react-native'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    onPressDis = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {this.onPressDis}
                >
                    <Text style = {styles.buttonText}> - </Text>
                </TouchableOpacity>
                
                <View style = {[styles.countContainer]}>
                    <Text style = {[styles.countText]}>
                        { this.state.count !== 0 ? this.state.count: null}
                    </Text>
                </View>
                
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {this.onPress}
                >
                    <Text style = {styles.buttonText}> + </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#b9fbee'
    },
    button: {
        width: '25%',
        height: '25%',
        borderRadius: 250,
        borderColor: '#29336b',
        borderWidth: 5,
        backgroundColor: '#91b8ed',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#03052d'
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        fontSize: 100,
        color: '#03052d'
    }
})
