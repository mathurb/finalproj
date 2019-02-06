import React from 'react';
import { Text,TouchableOpacity, FlatList, View} from 'react-native';
import styles from '../Assets/Styles/Style';
import ViewContainer from '../Components/ViewContainer';
import {Input, SearchBar} from 'react-native-elements';
export default class CropScene extends React.Component {
  static navigationOptions = {
    title: 'Crops',
  };

  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <ViewContainer>
        <View style={styles.croptab}>  
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
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
            {'key':'Cotton'},
            {'key':'Groundnut'},
            {'key':'Potatoes'},
            {'key':'Sunflower'},            
            {'key':'Soybean'},            
            {'key':'Tomatoes'},
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
