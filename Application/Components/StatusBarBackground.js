import React from 'react';
import { StyleSheet, View, Platform,StatusBar } from 'react-native';


export default class StatusBarBackground extends React.Component {
  render() {
    return (
      <View style={styles.StatusBarBackground}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //design statusbar
  StatusBarBackground: {
        height:Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        backgroundColor: 'black',
  },
});
