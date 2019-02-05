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
import ViewContainer from '../Components/ViewContainer';
import { LinearGradient } from 'expo';
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
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#F27121', '#E94057']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        >
        <SocialIcon 
          title='Login with Facebook'
          button
          type='facebook'
          onPress={signInWithFacebook}
          style={{
          }}
        />
        </LinearGradient>
        {/* {this.props.fontLoaded ? (
          <Text style={{ fontFamily: 'merriweather' ,marginTop: 200, padding: 10, fontSize: 20, color: '#fff' }}>
            Welcome To: 
          </Text>
        ) : null} */}
        {/* {this.props.fontLoaded ? (
          <Text style={{ fontFamily: 'merriweather' , fontSize: 40, color: '#fff', fontStyle: 'italic', fontWeight: '700' }}>
            AgroAd 
          </Text>
        ) : null} */}
        <Auth />
      </View>
    );
  }
}
