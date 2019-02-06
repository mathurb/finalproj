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
                {'key':'Check the Rice crop'},
                {'key':'Check the Rice crop'},
                {'key':'Check the Rice crop'},
                {'key':'Check the Rice crop'},
                {'key':'Check the Rice crop'},
                {'key':'Check the Rice crop'},
              ]}
              renderItem={({item})=>
              <View style={styles.sugitem}>
              <Text>{item.key}</Text>
              </View>
            }
            />
      </ViewContainer>
    );
  }
//function to retrieve data
}
