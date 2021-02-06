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
    paddingBottom: 10,
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
    margin: 20,
    height: 60,
    borderColor: '#778899',
    borderWidth: 1,
    backgroundColor: '#f2f9fa',
    color: 'black',
    fontWeight: 'bold',
  },
  loginButton: {
    color: '#1DB954',
    padding: 12,
    marginRight: 6,
  },
  commentButton: {
    flexDirection: 'row',
    padding: 16,
    marginRight: 6,
  },
  loginHitSlop: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 50,
  },
  loginSubmit: {
    width: '50%',
    height: 66,
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
    marginTop: 2,
    marginBottom: 22,
    marginRight: 10,
    marginLeft: 10,
    height: 60,
    borderColor: '#778899',
    borderWidth: 0.8,
    borderRadius: 32,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 4,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  loginImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  userInfo: {
    padding: 20,
    alignSelf: 'center',
    fontFamily: 'Cochin-Bold',
    fontWeight: 'bold',
    color: '#604df0',
    fontSize: 32,
  },
  formContent: {
    flex: 20,
  },
  inputContent: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'rgba(27, 34, 224,0.4)',
    color: '#ffffff',
    textShadowColor: '#320054',
  },
  searchButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 70,
    alignSelf: 'flex-end',
    backgroundColor: '#40E0D0',
    borderRadius: 30,
  },
  searchResultBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    color: '#3498db',
    marginLeft: 10,
  },
  postButton: {
    marginTop: 30,
    fontSize: 30,
    alignItems: 'center',
    width: 70,
    height: 45,
    justifyContent: 'center',
    backgroundColor: '#40E0D0',
    alignSelf: 'center',
    borderRadius: 30,
  },
})

export default styles
