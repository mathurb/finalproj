/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import {Button} from 'react-native-elements';
import ViewContainer from '../Components/ViewContainer';
export default class Profile extends Component {
  handleLogout= ()=>{
   AsyncStorage.removeItem('user');
   AsyncStorage.removeItem('token');
   this.props.navigation.navigate('Login')
  }
  handleContactButton = ()=>{
    this.props.navigation.navigate('Contact');
  }
  render() {
    return (
      <ViewContainer>
      <Button
          text='BUTTON'
          title='LOGOUT'
          textStyle={{ fontWeight: "700",fontSize:17 }}
          buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 50,
              justifyContent:'center',
              alignContent:'stretch',
              marginBottom:  15
          }}
          containerStyle={{ marginTop: 20 }}
          onPress={this.handleLogout}
      />
      <Button
          text='BUTTON'
          title='CONTACT LIST'
          textStyle={{ fontWeight: "700",fontSize:17 }}
          buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 50,
              justifyContent:'center',
              alignContent:'stretch',

          }}
          containerStyle={{ marginTop: 20 }}
          onPress={this.handleContactButton}
      />
      </ViewContainer>
    );
  }
}
