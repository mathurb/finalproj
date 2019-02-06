import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf:'stretch',
    fontSize:18,
    borderRadius: 50,
    
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:5,
    marginTop:20
  },
  register:{
    marginBottom:20,
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae',},
  text:{
    fontSize:24,
    // marginBottom:60,
    color:'#fff',
    fontWeight: 'normal',
    alignItems:'center',
  },
  btn:{
    alignSelf:'stretch',
    backgroundColor:'powderblue',
    padding:5,
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:5,
  },
});
