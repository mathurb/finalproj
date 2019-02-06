import React from 'react';
import { Text,TouchableOpacity, FlatList, View} from 'react-native';
import styles from '../Assets/Styles/Style';
import ViewContainer from '../Components/ViewContainer';
import {Input} from 'react-native-elements';
export default class CropScene extends React.Component {
  static navigationOptions = {
    title: 'Crops',
  };

  render() {
    return (
      <ViewContainer>
        <View style={styles.croptab}>  
        <Input
          placeholder='search'
          leftIcon={{type:'ion-icon',name:'search'}}
        />
        <FlatList
        style={styles.croptablist}
          data={[
            {'key':'Wheat'},
            {'key':'Bailey'},
            {'key':'Rice'},
            {'key':'Corn'},
            {'key':'SugerCane'},
            {'key':'Broom-corn'},
          ]}
          renderItem={({item})=> <TouchableOpacity style={styles.cropcards} onPress={this._handlePress}><Text>{item.key}</Text></TouchableOpacity>}
        />
        </View>
      </ViewContainer>
    );
  }
  _handlePress = ()=>{
    this.props.navigation.navigate('Detail');
  }
}
