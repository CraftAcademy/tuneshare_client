import React, {useState} from 'react'
import { Button, View } from 'react-native'
import { Audio } from 'expo-av'
import styles from '../styles/styles'


const TrackPlayer = ({post}) => {
  let songURI = post.preview_url
  const [playback, setPlayback] = useState()


  async function startPlayback() {
    const playback = new Audio.Sound()
    await playback.loadAsync({uri: songURI})
    await playback.playAsync()
    setPlayback(playback)
  }
  async function stopPlayback() {
    await playback.stopAsync()
    setPlayback(undefined)
  }

  return (
    <View style={styles.card_container}>
      <Button
        id={`post${post.id}`}
        color={ playback ? 'red' : 'blue'} 
        title={ playback ? "Stop Playback" : 'Start Playback' }
        onPress={ playback ? stopPlayback : startPlayback }
      />
      </View>
  )
}

export default TrackPlayer
