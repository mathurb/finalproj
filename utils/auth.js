import firebase from './firebase'

export async function signInWithFacebook() {
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

      console.log('Welcome' + name);

      // OR you have subscribed to auth state change, authStateChange handler will process the profile data
      return Promise.resolve({type: 'success'});
    }
    case 'cancel': {
      return Promise.reject({type: 'cancel'});
    }
  }
}