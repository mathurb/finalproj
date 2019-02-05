import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Application/Scenes/Login';
import Auth from './utils/Auth.js';
import {Font} from 'expo'

export default class App extends React.Component {
  state = {
    fbLoginSuccess: false,
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
        <Login fontLoaded={this.state.fontLoaded} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
