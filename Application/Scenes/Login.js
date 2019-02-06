import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';
import {Linking, WebBrowser} from 'expo'
import styles from '../Assets/Styles/Style';
import logo from '../Assets/Images/logo.png';
import ViewContainer from '../Components/ViewContainer';
import {Button,Icon, SocialIcon} from 'react-native-elements';
import Auth from '../utils/Auth.js';
import firebase from '../utils/firebase';
const captchaUrl = `https://agro-advisory.firebaseapp.com?appurl=${Linking.makeUrl('')}`;
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        user: undefined,
        phone: '',
        confirmationResult: undefined,
        code: ''
    }
    firebase.auth().onAuthStateChanged(user => {
        this.setState({user})
    })
  }
  static navigationOptions = {
    header: null,
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
// //otp sign ins
// _onPhoneChange = (phone) => {
//     this.setState({phone});
// }
// _onPhoneComplete = async() => {
//     let token = null
//     const listener = ({url}) => {
//         WebBrowser.dismissBrowser()
//         const tokenEncoded = Linking.parse(url).queryParams['token']
//         if (tokenEncoded)
//             token = decodeURIComponent(tokenEncoded)
//     }
//     Linking.addEventListener('url', listener)
//     await WebBrowser.openBrowserAsync(captchaUrl)
//     Linking.removeEventListener('url', listener)
//     if (token) {
//         const {phone} = this.state
//         //fake firebase.auth.ApplicationVerifier
//         const captchaVerifier = {
//             type: 'recaptcha',
//             verify: () => Promise.resolve(token)
//         }
//         try {
//             const confirmationResult = await firebase.auth().signInWithPhoneNumber(phone, captchaVerifier)
//             this.setState({confirmationResult})
//         } catch (e) {
//             console.warn(e)
//         }
//
//     }
// }
// _onCodeChange = (code) => {
//     this.setState({code})
// }
// _onSignIn = async () => {
//     const {confirmationResult, code} = this.state
//     try {
//         await confirmationResult.confirm(code)
//     } catch (e) {
//         console.warn(e)
//     }
//     this.reset()
// }
// _onSignOut = async () => {
//     try {
//         await firebase.auth().signOut()
//     } catch (e) {
//         console.warn(e)
//     }
// }
// reset = () => {
//     this.setState({
//         phone: '',
//         phoneCompleted: false,
//         confirmationResult: undefined,
//         code: ''
//     })
// }
  render() {
  {  // if (this.state.user)
    //     return (
    //         <ViewContainer >
    //             <Text>You signed in</Text>
    //             <Button
    //                 onPress={this._onSignOut}
    //                 title="Sign out"
    //             />
    //         </ViewContainer>
    //     )}
  }
{     /*   if (!this.state.confirmationResult)
            return (
              <ViewContainer>
              <SocialIcon
                title='Login with Facebook'
                button
                type='facebook'
                onPress={this._signInWithFacebook}
              />
                    <TextInput
                        value={this.state.phone}
                        onChangeText={this._onPhoneChange}
                        keyboardType="phone-pad"
                        placeholder="Your phone"
                    />
                    <Button
                        onPress={this._onPhoneComplete}
                        title="Next"
                    />

              </ViewContainer>
            )
        else
            return (
              <ViewContainer>
              <SocialIcon
                title='Login with Facebook'
                button
                type='facebook'
                onPress={this._signInWithFacebook}
              />
                    <TextInput
                        value={this.state.code}
                        onChangeText={this._onCodeChange}
                        keyboardType="numeric"
                        placeholder="Code from SMS"
                    />
                    <Button
                        onPress={this._onSignIn}
                        title="Sign in"
                    />
              </ViewContainer>
            )*/}
            return(<ViewContainer>
            <SocialIcon
              title='Login with Facebook'
              button
              type='facebook'
              onPress={this._signInWithFacebook}
            />
        </ViewContainer>)
  }


}
