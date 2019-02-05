import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import styles from '../Assets/Styles/Style';
import avatar from '../Assets/Images/Avatar.png';
import ViewContainer from '../Components/ViewContainer';
import {Button} from 'react-native-elements';
export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phonenumber: '',
      password: '',
      fullname: '',
      email: '',
      avatar: avatar
    }
  }
  render() {
    return (
      <ViewContainer>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(email)=>this.setState({email})}
        underlineColorAndroid = 'transparent'
      />
      <TextInput
        placeholder="fullname"
        style = {styles.input}
        onChangeText={(fullname)=>this.setState({fullname})}
        underlineColorAndroid = 'transparent'
      />
      <TextInput
        placeholder="phonenumber"
        style={styles.input}
        onChangeText={(phonenumber)=>this.setState({phonenumber})}
        underlineColorAndroid = 'transparent'
      />
      <TextInput
        placeholder="password"
        style = {[styles.input,{marginBottom:30}]}
        onChangeText={(password)=>this.setState({password})}
        underlineColorAndroid = 'transparent'
        secureTextEntry = {true}
      />
      <Button
          text='BUTTON'
          title='SUBMIT'
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
          onPress={this.handleSignup}
      />
       <View style={{height:20}}/>
      </ViewContainer>
    );
  }
  _handleSignup = ()=>{
  //   fetch('http://172.16.8.110:3000/api/users/signup',{
  //     method:'POST',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type':'application/json',
  //     },
  //     body:JSON.stringify({
  //         email:this.state.email,
  //         fullName:this.state.fullname,
  //         avatar:this.state.avatar,
  //         phonenumber:this.state.phonenumber,
  //         password: this.state.password,
  //     })
  // })
  // .then((response) => response.json())
  // .then((res)=>{
  //
  //     if(res.success === true){
  //         // AsyncStorage.setItem('token',res.token);
  //         // AsyncStorage.setItem('user',res.user);
  //         alert(res.message);
  //
  //         this.props.navigation.navigate('Login');
  //     }
  //     else{
  //         alert(res.message);
  //     }
  // })
  // .done();
  alert(`signed up`);
  }
}
