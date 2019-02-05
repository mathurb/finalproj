import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';
import styles from '../Assets/Styles/Style';
import logo from '../Assets/Images/logo.png';
import ViewContainer from '../Components/ViewContainer';
import {StackNavigator} from 'react-navigation';
import {Button,Icon, SocialIcon} from 'react-native-elements';
import Auth, { signInWithFacebook } from '../../utils/Auth.js';
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <ViewContainer>
        <View >
        
        <SocialIcon 
          title='Login with Facebook'
          button
          type='facebook'
          onPress={signInWithFacebook}
        />
        <Auth />

        </View>
      </ViewContainer>
    );
  }
}
