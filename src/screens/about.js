import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
    } from 'react-native';

    class About extends Component {
        handlePress = () => {
            // console.log(this.props.navigation)
            this.props.navigation.navigate('Profile',  {
                name: 'Luis-Carbajo'
            })
        }
        render () {
            return (
                <View style={ styles.container }>
                    <Text>About</Text>
                    <Button 
                        title="Ir al Profile"
                        onPress={ this.handlePress }    
                    />
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

export default About;    