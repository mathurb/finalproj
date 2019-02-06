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
                {'key':'Ensure Proper Water Drainage'},
                {'key':'Fertilizing your corn at the time of seeding can help provide the seeds with essential nutrients like potassium, phosphorous, and calcium.'},
                {'key':'Developing a drainage system in your crops can help prevent waterlogging and salinization in your soil'},
                {'key':'suggestion..'}
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
