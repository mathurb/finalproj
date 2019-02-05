import React from 'react';
import {
   ScrollView,
   KeyboardAvoidingView,
   Animated,
   Keyboard,
 } from 'react-native';
//import StatusBarBackground from './StatusBarBackground';
import styles from '../Assets/Styles/Style';

export default class ViewContainer extends React.Component {
  componentWillMount(){
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }
  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }
  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };
  render() {
    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.container}>
        <ScrollView>
        {this.props.children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
