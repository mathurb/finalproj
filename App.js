import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Application/Scenes/Login';
import Auth from './utils/Auth.js';

export default class App extends React.Component {
  state = {
    fbLoginSuccess: false
  }

  render() {
    return (
        <Login />
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
