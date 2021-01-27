import React, {useState, useEffect} from 'react'
import { Button, View } from 'react-native'
import { Audio } from 'expo-av'

const TrackPlayer = ({post}) => {
  const [playSong, setPlaySong] = useState()
  const [stopSong, setStopSong] = useState()

  const startPlayback = async () => {
    const { playSong } = await Audio.Sound.createAsync(
      { uri: post.preview_url },
      { shouldPlay: true }
    )
    setPlaySong(playSong) 
  }

  const stopPlayback = async () => {
    const {isPlaying} = await startPlayback(playSong)
    const {stopSong} = isPlaying.stopAsync()
    setStopSong(stopSong)
  }

  // useEffect(() => {
  //   return song
  //     ? () => {
  //         song.stopAsync()
  //       }
  //     : undefined
  // }, [song])

  return (
    <View>
      <Button title='Play a preview!' onPress={startPlayback} />
      <Button title='Stop preview!' onPress={stopPlayback} />
    </View>
  )
}

export default TrackPlayer

  // const stopPlayback = async () => {
  //   let playSong = {playSong}
  //   const {isPlaying} = await playSong.loadAsync(
  //     { uri: post.preview_url },
  //     { initialStatus: playSong }
  //   )
  //   const {stopSong} = isPlaying.stopAsync()
  //   setStopSong(stopSong)
  // }