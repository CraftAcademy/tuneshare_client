import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../styles/styles'

const PostIndex = ({post}) => {
  return (
    <Card style={styles.card_container}>
      <Card.Title style={styles.track}>{post.track}</Card.Title>
      <Card.Title style={styles.artists}>{post.artists}</Card.Title>
      <Card.Divider />
      <Card.Image style={styles.image} resizeMode="contain" source={{ uri: post.image }} >
      </Card.Image>
      <Card.Divider />
        <Text style={styles.description}>
          {post.description}
        </Text>
    </Card>
  )
}

export default PostIndex