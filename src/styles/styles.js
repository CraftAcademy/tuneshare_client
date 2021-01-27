import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: "black",
    padding: 10,
  },
  card_container: {
    position: "absolute",
    margin: 5,
    backgroundColor: "green",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    paddingBottom: 10,

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
    opacity: 0.4,
    fontSize: 70,
    alignSelf: "center",
    paddingTop: 40,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.8
  }
})

export default styles
