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
import {Button,Icon, SocialIcon} from 'react-native-elements';
import Auth from '../utils/Auth.js';
import firebase from '../utils/firebase';
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  //face book signin
  _signInWithFacebook= async()=> {
    const appId = Expo.Constants.manifest.extra.facebook.appId;
    const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs

    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync(
      appId,
      {permissions}
    );

    switch (type) {
      case 'success': {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase.auth().signInAndRetrieveDataWithCredential(credential);  // Sign in with Facebook credential
        // Do something with Facebook profile data

        const name = facebookProfileData.additionalUserInfo.profile.name
        // const email = facebookProfileData.additionalUserInfo.profile.email
        // const profilePictureURL = facebookProfileData.additionalUserInfo.profile.picture.data.url
        alert('Welcome ' + name);
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
        // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        return Promise.resolve({type: 'success'});
      }
      case 'cancel': {
        return Promise.reject({type: 'cancel'});
      }
    }
  }
  render() {
    return (
      <ViewContainer>

        <SocialIcon
          title='Login with Facebook'
          button
          type='facebook'
          onPress={this._signInWithFacebook}
        />


      </ViewContainer>
    );
  }
}
