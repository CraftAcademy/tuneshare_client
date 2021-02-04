import React from 'react'
import { Dimensions, View } from 'react-native'
import { Tile } from 'react-native-elements'
import styles from '../styles/styles'


const PostIndex = ({ post }) => {
  const screenWidth = Dimensions.get('window').width
  const numColumns = 3
  const tileSize = screenWidth / numColumns

  return (
    <View testID={`post-card-${post.id}`}>
      <Tile
        imageSrc={{ uri: post.image }}
        contentContainerStyle={{ alignContent: 'space-between' }}
      />
    </View>
  )
}

export default PostIndex
