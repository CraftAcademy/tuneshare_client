import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../styles/styles'
import TrackPlayer from './TrackPlayer'

const PostIndex = ({ post }) => {

  // const trackPreview = (e) => {
  //   e.preventDefault()
  //   playSong(e, post)
  // }

  return (
    <View style={styles.card_container}>
    <Card>
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
    </Card>
    <TrackPlayer post={post}/>
    </View>
  )
}

export default PostIndex
