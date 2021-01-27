import React, { useState } from 'react'
import { Audio } from 'expo-av'
import styles from '../styles/styles'
// import Icon from 'react-native-vector-icons/Ionicons'

const TrackPlayer = ({ post }) => {
  let songURI = post.preview_url
  const [playback, setPlayback] = useState()

  async function startPlayback() {
    const playback = new Audio.Sound()
    await playback.loadAsync({ uri: songURI })
    await playback.playAsync()
    setPlayback(playback)
  }
  async function stopPlayback() {
    await playback.stopAsync()
    setPlayback(undefined)
  }

  return (
    <>
    </>
  //   <>
  //     style={styles.playButton}
  //     name={playback ? 'ios-play-circle-sharp' : 'ios-pause-circle-sharp'}
  //     id={`post${post.id}`}
  //     title={playback ? 'Stop Playback' : 'Start Playback'}
  //     onPress={playback ? stopPlayback : startPlayback}
  //   </>
  )
}

export default TrackPlayer
