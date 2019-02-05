import React from 'react';
import { Text,TouchableOpacity, FlatList } from 'react-native';
import ViewContainer from '../Components/ViewContainer';
import {Input} from 'react-native-elements';
export default class CropScene extends React.Component {
  static navigationOptions = {
    title: 'Crops',
  };

  render() {
    return (
      <ViewContainer>
        <Input
          placeholder='search'
          leftIcon={{type:'ion-icon',name:'search'}}
        />
        <FlatList
          data={[
            {'key':'Wheat'},
            {'key':'Bailey'},
            {'key':'Rice'},
            {'key':'Corn'},
            {'key':'SugerCane'},
            {'key':'Weed'},
          ]}
          renderItem={({item})=> <TouchableOpacity  onPress={this._handlePress}><Text>{item.key}</Text></TouchableOpacity>}
        />
      </ViewContainer>
    );
  }
  _handlePress = ()=>{
    this.props.navigation.navigate('Detail');
  }
}
