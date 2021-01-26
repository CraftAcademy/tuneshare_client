import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'

const PostIndex = ({post}) => {
  return (
    <Card data-cy="post-card">
      <Card.FeaturedTitle data-cy="track-data">{post.artists}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle data-cy="track-data">{post.track_name}</Card.FeaturedSubtitle>
      <Card.Divider />
      <Card.Image data-cy="image"resizeMode="cover" source={{ uri: post.image }} >
      </Card.Image>
        <Text data-cy="description">
          {post.description}
        </Text>
    </Card>
  )
}

export default PostIndex


