import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'

const PostIndex = ({post}) => {
  return (
    <Card testId="post-index" data-cy="index">
      <Card.FeaturedTitle data-cy="track-data">{post.artists}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle data-cy="track-data">{post.track_name}</Card.FeaturedSubtitle>
      <Card.Divider />
      <Card.Image data-cy="image"resizeMode="cover" source={{ uri: post.image }} >
        <Text data-cy="description">
          {post.description}
        </Text>
      </Card.Image>
    </Card>
  )
}

export default PostIndex


