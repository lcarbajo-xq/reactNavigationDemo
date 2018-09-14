/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import About from './src/screens/about';
import Profile from './src/screens/profile';
import Login from './src/screens/login';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//createStackNavigaror recibe rutas y una configuración (opcional)

// const AppNavigator = createStackNavigator({
//   Home: App
// }, config)

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home/',
      navigationOptions: {
        title: "React Navigation | Basics", 
      }
    },
    About,
    Profile,
    Login
  }, 
  {
    initialRouteName: 'Login',
    initialRouteKey: 'login',
    initialRouteParams:{
      nombre: 'Luis Carbajo',
    },
    navigationOptions: {
      title: 'Titulo Estándar',
      headerTitleAllowFontScaling: true,
      headerBackTitle: 'Back',
      gesturesEnabled: true,
      headerBackImage: <Text>{ `<=` }</Text>
      // header: <Text style={{ color: 'white' }}>Esto es el header</Text>
    },
    headerMode: 'float',
    mode: 'card',
    cardStyle: {
      borderWidth: 2,
      backgroundColor: 'red',
    },
    headerTransitionPreset: 'fade-in-place'
  })

  export default AppNavigator;