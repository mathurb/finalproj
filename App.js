import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Application/Scenes/Login';

export default class App extends React.Component {
  state = {
    fbLoginSuccess: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
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
