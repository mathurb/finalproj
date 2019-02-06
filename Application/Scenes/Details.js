import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'
import ViewContainer from '../Components/ViewContainer';
import Avatar from '../Assets/Images/Avatar.png';
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
        <StatusBar barStyle="default"  />
          <View style={styles.header}>
             <View style={styles.headerContent}>
                 <Image
                   style={styles.avatar}
                   source={{uri: Avatar.toString()}}/>

                 <Text style={styles.name}>
                   John Doe
                 </Text>
             </View>
           </View>

           <View style={styles.body}>
             <View style={styles.bodyContent}>
               <Text style={styles.textInfo}>
                 johndoe@gmail.com
               </Text>

               <Text style={styles.textInfo}>
                 Following: 244
               </Text>
               <Text style={styles.textInfo}>
                 Followers: 1.250
               </Text>
             </View>
           </View>

      </ViewContainer>
    );
  }
 // _handlePress=()=>{
 //   this.props.navigation.navigate('Main');
 // }

}
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1E90FF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  }
});
