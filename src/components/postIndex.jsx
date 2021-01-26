import React, { useState, useEffect } from 'react'
import { Text, Button } from 'react-native'
import { Card } from 'react-native-elements'
import { Audio } from 'expo-av'
import styles from '../styles/styles'

const PostIndex = ({ post }) => {
  const [song, setSong] = useState()
  const playSong = async () => {
    const { song } = await Audio.Sound.createAsync(
      { uri: post.preview_url },
      { shouldPlay: true }
    )
    debugger
    setSong(song)

    await song.playAsync()
  }
  useEffect(() => {
    return song
      ? () => {
          song.unloadAsync()
        }
      : undefined
  }, [song])
  return (
    <Card style={styles.card_container}>
      <Card.Title style={styles.track}>{post.track}</Card.Title>
      <Card.Title style={styles.artists}>{post.artists}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={styles.image}
        resizeMode='contain'
        source={{ uri: post.image }}
      ></Card.Image>
      <Card.Divider />
      <Text style={styles.description}>{post.description}</Text>
      <Button title='Play a preview!' onPress={() => playSong} />
    </Card>
  )
}

export default PostIndex
