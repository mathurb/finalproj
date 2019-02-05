import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {Input} from 'react-native-elements';
import ViewContainer from '../Components/ViewContainer';
export default class Suggestions extends React.Component {
  static navigationOptions = {
    title:'Final Project',
  };
  render() {
    return (
      <ViewContainer>
            <FlatList
              data={[
                {'key':'Wheat'},
                {'key':'Bailey'},
                {'key':'Rice'},
                {'key':'Corn'},
                {'key':'SugerCane'},
                {'key':'Weed'},
              ]}
              renderItem={({item})=><Text>{item.key}</Text>}
            />
      </ViewContainer>
    );
  }
//function to retrieve data
}
