import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'

const PostIndex = ({post}) => {
  return (
    <Card data-cy="post-card">
      <Card.Title data-cy="body">{post.artists}</Card.Title>
      <Card.Title >{post.track_name}</Card.Title>
      <Card.Divider />
      <Card.Image data-cy="image"resizeMode="cover" source={{ uri: post.image }} >
      </Card.Image>
        <Text name="description">
          {post.description}
        </Text>
    </Card>
  )
}

export default PostIndex


