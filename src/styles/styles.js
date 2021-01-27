import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: "peachpuff",
    padding: 10,
  },
  mainHeader: {
    backgroundColor: "papayawhip",
    
  },
  appTitle: {
    fontFamily: "Noteworthy-Bold",
    fontSize: 35,
    textAlign: "left",
    color: "lightsalmon",
    textShadowColor: "indigo",
    textShadowOffset: 12,  
    textShadowRadius: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
  card_container: {
    position: "absolute",
    margin: 5,
    backgroundColor: "mintcream",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    paddingBottom: 10,
    borderRadius: 8,
  },
  artists: {
    fontSize: 20,
    fontFamily: 'palatino-bolditalic',
  },
  track: {
    fontSize: 25,
    fontFamily: 'palatino-bolditalic'
  },
  image: {
    margin: 5,
    resizeMode: "contain",
  },
  description: {
    fontFamily: 'palatino-bolditalic',
    fontSize: 15,
  },
  playButton: {
    color: "aliceblue",
    opacity: 0.6,
    fontSize: 70,
    alignSelf: "center",
    marginTop: 40,
  },
  stopButton: {
    color: "lavenderblush",
    opacity: 0.7,
    fontSize: 70,
    alignSelf: "center",
    marginTop: 40,
  }
})

export default styles
