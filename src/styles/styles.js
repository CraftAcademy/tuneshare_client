import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peachpuff',
    padding: 10,
  },
  mainHeader: {
    backgroundColor: 'papayawhip',
  },
  appTitle: {
    fontFamily: 'Noteworthy-Bold',
    fontSize: 35,
    textAlign: 'left',
    color: 'lightsalmon',
    textShadowColor: 'indigo',
    paddingBottom: 60,
  },
  card_container: {
    position: 'absolute',
    margin: 5,
    backgroundColor: 'mintcream',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: 10,
    borderRadius: 8,
  },
  artists: {
    fontSize: 20,
    fontFamily: 'Palatino-BoldItalic',
    fontWeight: 'bold',
    color: 'salmon',
  },
  track: {
    fontSize: 25,
    fontFamily: 'Palatino-BoldItalic',
    color: 'salmon',
  },
  image: {
    margin: 5,
    resizeMode: 'contain',
  },
  description: {
    fontFamily: 'Palatino-BoldItalic',
    fontSize: 15,
    color: 'salmon',
  },
  playButton: {
    color: 'aliceblue',
    opacity: 0.6,
    fontSize: 70,
    alignSelf: 'center',
    marginTop: 40,
  },
  stopButton: {
    color: 'lavenderblush',
    opacity: 0.7,
    fontSize: 70,
    alignSelf: 'center',
    marginTop: 40,
  },
})

export default styles
