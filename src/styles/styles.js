import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: "black",
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 10,
  },
  card_container: {
    position: "absolute",
    width: Dimensions.get("window").width,
    margin: 5,
    backgroundColor: "green",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
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
  },
  description: {
    fontFamily: 'palatino-bolditalic',
    fontSize: 15,
  }
})

export default styles
