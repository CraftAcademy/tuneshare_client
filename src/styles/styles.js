import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    padding: 10,
  },
  mainHeader: {
    backgroundColor: '#191414',
  },
  appTitle: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 35,
    textAlign: 'left',
    color: 'grey',
    opacity: 0.6,
    textShadowColor: 'indigo',
    paddingBottom: 6,
  },
  card_container: {
    position: 'absolute',
    margin: 5,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: 10,
    borderRadius: 8,
  },
  artists: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'black',
  },
  track: {
    fontSize: 25,
    fontFamily: 'Arial',
    color: 'black',
  },
  image: {
    margin: 5,
    resizeMode: 'contain',
  },
  description: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: 'black',
    paddingBottom: 10
  },
  playButton: {
    color: 'grey',
    opacity: 0.6,
    fontSize: 70,
    alignSelf: 'center',
    marginTop: 40,
  },
  stopButton: {
    color: 'grey',
    opacity: 0.7,
    fontSize: 70,
    alignSelf: 'center',
    marginTop: 40,
  },
  postDescription: {
    paddingTop: 20,
    paddingBottom: 20,
    margin: 20,
  },
  searchInput: {
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginButton: {
    color: '#1DB954',
    padding: 12,
    marginRight: 6,
  },
  commentButton: {
    padding: 12,
    marginRight: 6,
    fontFamily: 'Helvetica',
    color: 'dodgerblue',
    alignItems: 'left',
    fontSize: 15,
  },
  loginHitSlop: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 50,
  },
  loginSubmit: {
    width: '50%',
    height: 60,
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
  linearGradient: {
    paddingLeft: 2,
    borderRadius: 16,
    borderColor: '#013220',
  },
  buttonContent: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textShadowColor: '#013220',
    textShadowRadius: 4,
  },
  loginInput: {
    margin: 20,
    height: 60,
    borderColor: '#778899',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 4,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  loginImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfo: {
    padding: 20,
    alignSelf: 'center',
    fontFamily: 'Cochin-Bold',
    fontWeight: 'bold',
    color: '#604df0',
    fontSize: 32,
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
})

export default styles
