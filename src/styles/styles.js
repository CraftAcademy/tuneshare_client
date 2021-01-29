import { StyleSheet } from 'react-native'

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
    backgroundColor: 'black',
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
  }
})

export default styles
