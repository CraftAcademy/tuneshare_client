import React from 'react'
import { Text, View, Button } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from '../styles/styles'
import { Card } from 'react-native-elements'
import TrackPlayer from './TrackPlayer'

const SinglePost = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const post = route.params.post
  return (
    <View style={styles.card_container} testID='post-index'>
      <Card testID={`post-card-${post.id}`}>
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
        <Card.Divider />
      </Card>
      <Button title='Back To Profile' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default SinglePost
