import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../styles/styles'
import TrackPlayer from './TrackPlayer'

const PostIndex = ({ post }) => {
  return (
    <View style={styles.card_container}>
      <Card testID='post-index'>
        <Card.Title testID={`post-title-${post.id}`} style={styles.track}>
          {post.track}
        </Card.Title>
        <Card.Title testID={`post-artist-${post.id}`} style={styles.artists}>
          {post.artists}
        </Card.Title>
        <Card.Divider />
        <Card.Image style={styles.image} source={{ uri: post.image }}>
          <TrackPlayer post={post} />
        </Card.Image>
        <Card.Divider />
        <Text testID={`post-description-${post.id}`} style={styles.description}>
          {post.description}
        </Text>
      </Card>
    </View>
  )
}

export default PostIndex
