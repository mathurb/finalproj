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
import styles from '../Assets/Styles/Style';
import ViewContainer from '../Components/ViewContainer';
export default class Suggestions extends React.Component {
  static navigationOptions = {
    title:'Suggestions',
  };
  render() {
    return (
      <ViewContainer>
            <FlatList
            style={styles.suglist}
              data={[
                {'key':'1','text':'water plants'},
                {'key':'2','text':'water plants'},
                {'key':'3','text':'water plants'},
                {'key':'4','text':'water plants'},
                {'key':'5','text':'water plants'},
                {'key':'6','text':'water plants'},
              ]}
              renderItem={({item})=>
              <View style={styles.sugitem}>
              <Text>{item.text}</Text>
              </View>
            }
            />
      </ViewContainer>
    );
  }
//function to retrieve data
}
