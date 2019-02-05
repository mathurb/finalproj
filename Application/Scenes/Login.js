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
import {Button,Icon} from 'react-native-elements';
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phonenumber: null,
      password: null
    }
  }

  render() {
    return (
      <ViewContainer>
      <View >
      <TextInput
        placeholder="phonenumber"
        style={styles.input}
        onChangeText={(phonenumber)=>this.setState({phonenumber})}
        underlineColorAndroid = 'transparent'
      />
      <TextInput
        placeholder="password"
        style = {[styles.input,{marginBottom: 30}]}
        onChangeText={(password)=>this.setState({password})}
        underlineColorAndroid = 'transparent'
        secureTextEntry = {true}
      />
      <Button
          text='BUTTON'
          title='LOGIN'
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
          onPress={this._handleLogin}
      />
      <Button
          text='BUTTON'
          title='SIGNUP'
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
          onPress={this._handleSignup}
      />

    </View>
      </ViewContainer>
    );
  }
  _handleLogin = ()=>{
      // fetch('http://172.16.8.110:3000/api/users/auth',{
      //     method:'POST',
      //     headers: {
      //         'Accept': 'application/json',
      //         'Content-Type':'application/json',
      //     },
      //     body:JSON.stringify({
      //         phonenumber:this.state.phonenumber,
      //         password: this.state.password,
      //     })
      // })
      // .then((response) => response.json())
      // .then((res)=>{
      //
      //     if(res.success === true){
      //         AsyncStorage.setItem('token',JSON.stringify(res.token));
      //         AsyncStorage.setItem('user',JSON.stringify(res.user));
      //         AsyncStorage.setItem('id',JSON.stringify(res.user.id));
      //          alert(`${res.token}`);
      //
      //         this.props.navigation.navigate('Profile');
      //     }
      //     else{
      //         alert('can not log you in');
      //     }
      // })
      // .done();
     alert(`username:${this.state.phonenumber}\npassword:${this.state.password}`);
  }
  _handleSignup = ()=>{
    alert(`sign up clicked`);
    //this.props.navigation.navigate('Signup');
  }
}
