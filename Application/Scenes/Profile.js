/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Image,
  StyleSheet,
} from 'react-native';
import Avatar from '../Assets/Images/Avatar.png'
import {Button} from 'react-native-elements';
import ViewContainer from '../Components/ViewContainer';
export default class Profile extends Component {

  state = {
    uri: Avatar,
  }

  componentDidMount(){
    this.setProfileData();
  }

  static navigationOptions = {
    title: 'Profile',
  };
  _handleLogout= ()=>{
   // AsyncStorage.removeItem('user');
   AsyncStorage.removeItem('userToken');
   this.props.navigation.navigate('Auth');
   alert(`pressed logout button`);
  }

  render() {
    return (
      <ViewContainer>
        <View style={styles.header}>
           <View style={styles.headerContent}>
               <Image style={styles.avatar}
                 source={{uri: this.state.uri.toString()}}/>

               <Text style={styles.name}>
                 John Doe
               </Text>
           </View>
         </View>

         <View style={styles.body}>
           <View style={styles.bodyContent}>
             <Text style={styles.textInfo}>
              johndoe@gmail.com
             </Text>

             <Text style={styles.textInfo}>
               Following: 244
             </Text>
             <Text style={styles.textInfo}>
               Followers: 1.250
             </Text>
           </View>
         </View>
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
          onPress={this._handleLogout}
      />

      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1E90FF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  }
});
