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
                {'key':'1','text':'Check the Rice crop'},
                {'key':'2','text':'Ensure Proper Water Drainage'},
                {'key':'3','text':'Fertilizing your corn at the time of seeding can help provide the seeds with essential nutrients like potassium, phosphorous, and calcium'},
                {'key':'4','text':'Developing a drainage system in your crops can help prevent waterlogging and salinization in your soil'},
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
