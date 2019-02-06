import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import ViewContainer from '../Components/ViewContainer';
export default class Details extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: 'test content',
  };

  render() {
    return (
      <ViewContainer>
        
        <Button title="Back" onPress={this._signOutAsync} />
        <StatusBar barStyle="default"  />
      </ViewContainer>
    );
  }
 // _handlePress=()=>{
 //   this.props.navigation.navigate('Main');
 // }
  _signOutAsync = async () => {
    this.props.navigation.navigate('Main');
    // alert(`test`);
  };
}
